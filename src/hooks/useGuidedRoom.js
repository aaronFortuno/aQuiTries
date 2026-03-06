import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { db } from '../firebase/config';
import {
  createRoom as fbCreateRoom,
  joinRoom as fbJoinRoom,
  listenToRoom,
  setPlayerSelection,
  setPlayerGender,
  setRoomScenario,
  setRoomStatus,
  clearPlayerSelections,
  setupPresence,
  setupTeacherPresence,
  getConnectionCount,
  closeRoom as fbCloseRoom,
  isPlayerConnected,
} from '../firebase/roomService';

function generatePlayerId() {
  return 'p_' + Math.random().toString(36).slice(2, 9);
}

export function useGuidedRoom() {
  const [roomCode, setRoomCode] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const [playerId, setPlayerId] = useState(null);
  const [role, setRole] = useState(null); // 'teacher' | 'student'
  const [error, setError] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const unsubscribeRef = useRef(null);
  const cleanupPresenceRef = useRef(null);

  // Restore session from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('guidedRoom');
    if (saved) {
      try {
        const { roomCode: rc, playerId: pid, role: r } = JSON.parse(saved);
        if (rc && pid && r) {
          setRoomCode(rc);
          setPlayerId(pid);
          setRole(r);
        }
      } catch (_) { /* ignore corrupt data */ }
    }
  }, []);

  // Persist session to sessionStorage
  useEffect(() => {
    if (roomCode && playerId && role) {
      sessionStorage.setItem('guidedRoom', JSON.stringify({ roomCode, playerId, role }));
    }
  }, [roomCode, playerId, role]);

  // Listen to room changes
  useEffect(() => {
    if (!roomCode) return;

    unsubscribeRef.current = listenToRoom(db, roomCode, (data) => {
      if (!data) {
        setError('ROOM_NOT_FOUND');
        return;
      }
      setRoomData(data);

      if (data.status === 'closed') {
        cleanup();
      }
    });

    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
        unsubscribeRef.current = null;
      }
    };
  }, [roomCode]);

  // Setup presence when room + player are set
  useEffect(() => {
    if (!roomCode || !playerId) return;

    if (role === 'teacher') {
      cleanupPresenceRef.current = setupTeacherPresence(db, roomCode);
    } else {
      cleanupPresenceRef.current = setupPresence(db, roomCode, playerId);
    }

    return () => {
      if (cleanupPresenceRef.current) {
        cleanupPresenceRef.current();
        cleanupPresenceRef.current = null;
      }
    };
  }, [roomCode, playerId, role]);

  // Reset hasSubmitted when round changes
  useEffect(() => {
    if (roomData?.status === 'lobby' || roomData?.status === 'playing') {
      const myPlayer = roomData?.players?.[playerId];
      if (!myPlayer?.selections) {
        setHasSubmitted(false);
      }
    }
  }, [roomData?.status, roomData?.scenarioId, playerId, roomData?.players]);

  const cleanup = useCallback(() => {
    sessionStorage.removeItem('guidedRoom');
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }
    if (cleanupPresenceRef.current) {
      cleanupPresenceRef.current();
      cleanupPresenceRef.current = null;
    }
    setRoomCode(null);
    setRoomData(null);
    setPlayerId(null);
    setRole(null);
    setHasSubmitted(false);
    setError(null);
  }, []);

  // === Teacher API ===

  const createRoom = useCallback(async () => {
    try {
      setError(null);
      const count = await getConnectionCount(db);
      if (count >= 95) {
        setError('CONNECTION_LIMIT');
        return null;
      }
      const code = await fbCreateRoom(db);
      const pid = generatePlayerId();
      setRoomCode(code);
      setPlayerId(pid);
      setRole('teacher');
      return code;
    } catch (e) {
      setError(e.message);
      return null;
    }
  }, []);

  const startRound = useCallback(async (scenarioId) => {
    if (!roomCode) return;
    try {
      setError(null);
      await clearPlayerSelections(db, roomCode);
      await setRoomScenario(db, roomCode, scenarioId);
      await setRoomStatus(db, roomCode, 'playing');
    } catch (e) {
      setError(e.message);
    }
  }, [roomCode]);

  const closeRound = useCallback(async () => {
    if (!roomCode) return;
    try {
      await setRoomStatus(db, roomCode, 'results');
    } catch (e) {
      setError(e.message);
    }
  }, [roomCode]);

  const nextRound = useCallback(async () => {
    if (!roomCode) return;
    try {
      await clearPlayerSelections(db, roomCode);
      await setRoomScenario(db, roomCode, null);
      await setRoomStatus(db, roomCode, 'lobby');
    } catch (e) {
      setError(e.message);
    }
  }, [roomCode]);

  const endSession = useCallback(async () => {
    if (!roomCode) return;
    try {
      await fbCloseRoom(db, roomCode);
      cleanup();
    } catch (e) {
      setError(e.message);
    }
  }, [roomCode, cleanup]);

  // === Student API ===

  const joinRoom = useCallback(async (code) => {
    try {
      setError(null);
      const count = await getConnectionCount(db);
      if (count >= 95) {
        setError('CONNECTION_LIMIT');
        return false;
      }
      const pid = generatePlayerId();
      await fbJoinRoom(db, code, pid);
      setRoomCode(code);
      setPlayerId(pid);
      setRole('student');
      return true;
    } catch (e) {
      setError(e.message);
      return false;
    }
  }, []);

  const setGender = useCallback(async (gender) => {
    if (!roomCode || !playerId) return;
    try {
      await setPlayerGender(db, roomCode, playerId, gender);
    } catch (e) {
      setError(e.message);
    }
  }, [roomCode, playerId]);

  const submitSelection = useCallback(async (charIds) => {
    if (!roomCode || !playerId) return;
    try {
      await setPlayerSelection(db, roomCode, playerId, charIds);
      setHasSubmitted(true);
    } catch (e) {
      setError(e.message);
    }
  }, [roomCode, playerId]);

  // === Derived state ===

  const players = useMemo(() => {
    if (!roomData?.players) return {};
    return roomData.players;
  }, [roomData?.players]);

  // Filter players by heartbeat freshness (connected if lastSeen < 90s ago)
  const connectedPlayers = useMemo(() => {
    return Object.entries(players).filter(([, p]) => isPlayerConnected(p));
  }, [players]);

  const playerCount = connectedPlayers.length;

  const submittedCount = useMemo(() => {
    return connectedPlayers.filter(([, p]) => p.selections && p.selections.length > 0).length;
  }, [connectedPlayers]);

  const aggregatedResults = useMemo(() => {
    const votes = {};
    connectedPlayers.forEach(([, p]) => {
      if (!p.selections) return;
      p.selections.forEach((charId) => {
        votes[charId] = (votes[charId] || 0) + 1;
      });
    });
    return votes;
  }, [connectedPlayers]);

  const aggregatedByGender = useMemo(() => {
    const result = { noi: {}, noia: {}, ns: {} };
    connectedPlayers.forEach(([, p]) => {
      if (!p.selections) return;
      const g = p.gender || 'ns';
      p.selections.forEach((charId) => {
        result[g] = result[g] || {};
        result[g][charId] = (result[g][charId] || 0) + 1;
      });
    });
    return result;
  }, [connectedPlayers]);

  const roomStatus = roomData?.status || null;
  const currentScenarioId = roomData?.scenarioId || null;

  return {
    // State
    roomCode,
    roomStatus,
    currentScenarioId,
    playerId,
    role,
    error,
    hasSubmitted,
    players,
    playerCount,
    submittedCount,
    aggregatedResults,
    aggregatedByGender,

    // Teacher API
    createRoom,
    startRound,
    closeRound,
    nextRound,
    endSession,

    // Student API
    joinRoom,
    setGender,
    submitSelection,

    // Shared
    cleanup,
  };
}
