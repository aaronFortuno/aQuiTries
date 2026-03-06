import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  onSnapshot,
  collection,
  getDocs,
  serverTimestamp,
} from 'firebase/firestore';

const HEARTBEAT_INTERVAL = 30_000; // 30s
const PRESENCE_TIMEOUT = 90_000;   // 90s — consider disconnected after this
const ROOM_TTL_MS = 8 * 60 * 60 * 1000; // 8h — rooms auto-expire after this

function generateRoomCode() {
  return String(Math.floor(1000 + Math.random() * 9000));
}

// === Room CRUD ===

export async function createRoom(db) {
  let code = generateRoomCode();
  let attempts = 0;

  while (attempts < 10) {
    const snap = await getDoc(doc(db, 'rooms', code));
    if (!snap.exists()) break;
    code = generateRoomCode();
    attempts++;
  }

  const now = Date.now();
  await setDoc(doc(db, 'rooms', code), {
    status: 'lobby',
    scenarioId: null,
    createdAt: serverTimestamp(),
    expiresAt: new Date(now + ROOM_TTL_MS),
    players: {},
  });

  return code;
}

export async function joinRoom(db, code, playerId, gender) {
  const roomRef = doc(db, 'rooms', code);
  const snap = await getDoc(roomRef);

  if (!snap.exists()) {
    throw new Error('ROOM_NOT_FOUND');
  }

  const room = snap.data();
  if (room.status === 'closed') {
    throw new Error('ROOM_CLOSED');
  }

  // Check if room has expired
  if (room.expiresAt) {
    const expiry = room.expiresAt.toDate ? room.expiresAt.toDate() : new Date(room.expiresAt);
    if (Date.now() > expiry.getTime()) {
      await deleteDoc(roomRef);
      throw new Error('ROOM_NOT_FOUND');
    }
  }

  await updateDoc(roomRef, {
    [`players.${playerId}`]: {
      gender: gender || 'ns',
      lastSeen: serverTimestamp(),
      selections: null,
    },
  });

  return room;
}

// === Real-time listener ===

export function listenToRoom(db, code, callback) {
  const roomRef = doc(db, 'rooms', code);
  return onSnapshot(roomRef, (snap) => {
    callback(snap.exists() ? snap.data() : null);
  });
}

// === Player actions ===

export async function setPlayerSelection(db, code, playerId, charIds) {
  await updateDoc(doc(db, 'rooms', code), {
    [`players.${playerId}.selections`]: charIds,
  });
}

export async function setPlayerGender(db, code, playerId, gender) {
  await updateDoc(doc(db, 'rooms', code), {
    [`players.${playerId}.gender`]: gender,
  });
}

// === Teacher actions ===

export async function setRoomScenario(db, code, scenarioId) {
  await updateDoc(doc(db, 'rooms', code), { scenarioId });
}

export async function setRoomStatus(db, code, status) {
  await updateDoc(doc(db, 'rooms', code), { status });
}

export async function clearPlayerSelections(db, code) {
  const snap = await getDoc(doc(db, 'rooms', code));
  if (!snap.exists()) return;

  const players = snap.data().players || {};
  const updates = {};
  Object.keys(players).forEach((pid) => {
    updates[`players.${pid}.selections`] = null;
  });

  if (Object.keys(updates).length > 0) {
    await updateDoc(doc(db, 'rooms', code), updates);
  }
}

// === Presence (heartbeat-based, replaces onDisconnect) ===

export function setupPresence(db, code, playerId) {
  const connId = `conn_${Math.random().toString(36).slice(2, 9)}`;
  const connRef = doc(db, 'connections', connId);
  const roomRef = doc(db, 'rooms', code);

  // Initial presence write
  setDoc(connRef, { lastSeen: serverTimestamp() });
  updateDoc(roomRef, {
    [`players.${playerId}.lastSeen`]: serverTimestamp(),
  });

  // Heartbeat: update lastSeen every 30s
  const interval = setInterval(() => {
    setDoc(connRef, { lastSeen: serverTimestamp() }, { merge: true }).catch(() => {});
    updateDoc(roomRef, {
      [`players.${playerId}.lastSeen`]: serverTimestamp(),
    }).catch(() => {});
  }, HEARTBEAT_INTERVAL);

  // Cleanup function
  const cleanup = () => {
    clearInterval(interval);
    deleteDoc(connRef).catch(() => {});
    updateDoc(roomRef, {
      [`players.${playerId}.lastSeen`]: null,
    }).catch(() => {});
  };

  // Best-effort cleanup on tab close
  const handleUnload = () => cleanup();
  window.addEventListener('beforeunload', handleUnload);

  return () => {
    window.removeEventListener('beforeunload', handleUnload);
    cleanup();
  };
}

export function setupTeacherPresence(db, code) {
  const connId = `conn_${Math.random().toString(36).slice(2, 9)}`;
  const connRef = doc(db, 'connections', connId);

  setDoc(connRef, { lastSeen: serverTimestamp() });

  const interval = setInterval(() => {
    setDoc(connRef, { lastSeen: serverTimestamp() }, { merge: true }).catch(() => {});
  }, HEARTBEAT_INTERVAL);

  const cleanup = () => {
    clearInterval(interval);
    deleteDoc(connRef).catch(() => {});
  };

  const handleUnload = () => {
    cleanup();
    // Best-effort: mark room as paused when teacher leaves
    updateDoc(doc(db, 'rooms', code), { status: 'paused' }).catch(() => {});
  };
  window.addEventListener('beforeunload', handleUnload);

  return () => {
    window.removeEventListener('beforeunload', handleUnload);
    cleanup();
  };
}

// === Connection counting ===

export async function getConnectionCount(db) {
  const snap = await getDocs(collection(db, 'connections'));
  return snap.size;
}

// === Close room ===

export async function closeRoom(db, code) {
  await updateDoc(doc(db, 'rooms', code), { status: 'closed' });
  setTimeout(async () => {
    try {
      await deleteDoc(doc(db, 'rooms', code));
    } catch (_) { /* room may already be gone */ }
  }, 5000);
}

// === Utility: check if a player is connected based on lastSeen ===

export function isPlayerConnected(player) {
  if (!player?.lastSeen) return false;
  const lastSeen = player.lastSeen?.toMillis
    ? player.lastSeen.toMillis()
    : player.lastSeen?.seconds
      ? player.lastSeen.seconds * 1000
      : 0;
  return Date.now() - lastSeen < PRESENCE_TIMEOUT;
}
