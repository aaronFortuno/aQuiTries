import { useState, useEffect, useCallback } from 'react';
import StartScreen from './StartScreen';
import ScenarioScreen from './ScenarioScreen';
import EndScreen from './EndScreen';
import SceneBackground from './SceneBackground';
import TeacherLobby from './guided/TeacherLobby';
import TeacherRoundView from './guided/TeacherRoundView';
import TeacherResultsView from './guided/TeacherResultsView';
import StudentJoin from './guided/StudentJoin';
import StudentWaiting from './guided/StudentWaiting';
import StudentScenarioWrapper from './guided/StudentScenarioWrapper';
import StudentResultsView from './guided/StudentResultsView';
import { I18nProvider, useTranslation } from '../i18n';
import { useScenarioManager } from '../hooks/useScenarioManager';
import { useGuidedRoom } from '../hooks/useGuidedRoom';
import { scenarioBackgrounds, allBackgroundImages } from '../assets/backgrounds';

function LanguageToggle() {
  const { locale, setLocale } = useTranslation();

  return (
    <button
      className="lang-toggle"
      onClick={() => setLocale(locale === 'ca' ? 'es' : 'ca')}
    >
      {locale === 'ca' ? 'ES' : 'CA'}
    </button>
  );
}

function AppContent() {
  const [screen, setScreen] = useState('start');
  const [mode, setMode] = useState(null); // null | 'individual' | 'guided-teacher' | 'guided-student'
  const { locale } = useTranslation();

  const {
    currentScenario,
    currentIndex,
    totalScenarios,
    isLastScenario,
    currentSelection,
    selections,
    toggleCharacter,
    confirmSelection,
    nextScenario,
    skipScenario,
    reset,
  } = useScenarioManager(locale);

  const guidedRoom = useGuidedRoom();

  // === Individual mode handlers ===
  const handleStartIndividual = () => {
    setMode('individual');
    setScreen('scenario');
  };

  const handleNext = () => {
    if (isLastScenario) {
      setScreen('end');
    } else {
      nextScenario();
    }
  };

  const handleSkip = () => skipScenario();
  const handleFinish = () => setScreen('end');

  const handleRestart = () => {
    reset();
    setMode(null);
    setScreen('start');
  };

  // === Guided Teacher handlers ===
  const handleCreateRoom = useCallback(async () => {
    const code = await guidedRoom.createRoom();
    if (code) {
      setMode('guided-teacher');
      setScreen('guided-lobby');
    }
  }, [guidedRoom]);

  const handleStartRound = useCallback(async (scenarioId) => {
    await guidedRoom.startRound(scenarioId);
  }, [guidedRoom]);

  const handleCloseRound = useCallback(async () => {
    await guidedRoom.closeRound();
  }, [guidedRoom]);

  const handleNextRound = useCallback(async () => {
    await guidedRoom.nextRound();
  }, [guidedRoom]);

  const handleEndSession = useCallback(async () => {
    await guidedRoom.endSession();
    setMode(null);
    setScreen('start');
  }, [guidedRoom]);

  // === Guided Student handlers ===
  const handleJoinScreen = () => {
    setMode('guided-student');
    setScreen('guided-join');
  };

  const handleJoinRoom = useCallback(async (code, gender) => {
    const success = await guidedRoom.joinRoom(code);
    if (success) {
      await guidedRoom.setGender(gender);
      setScreen('guided-waiting');
    }
  }, [guidedRoom]);

  const handleStudentSubmit = useCallback(async (charIds) => {
    await guidedRoom.submitSelection(charIds);
  }, [guidedRoom]);

  const handleBackToStart = useCallback(() => {
    guidedRoom.cleanup();
    setMode(null);
    setScreen('start');
  }, [guidedRoom]);

  // === Guided mode screen transitions (teacher) ===
  useEffect(() => {
    if (mode !== 'guided-teacher') return;
    const status = guidedRoom.roomStatus;
    if (status === 'lobby') setScreen('guided-lobby');
    else if (status === 'playing') setScreen('guided-playing');
    else if (status === 'results') setScreen('guided-results');
    else if (status === 'closed') {
      setMode(null);
      setScreen('start');
    }
  }, [mode, guidedRoom.roomStatus]);

  // === Guided mode screen transitions (student) ===
  useEffect(() => {
    if (mode !== 'guided-student' || screen === 'guided-join') return;
    const status = guidedRoom.roomStatus;

    if (status === 'lobby') {
      setScreen('guided-waiting');
    } else if (status === 'playing') {
      if (guidedRoom.hasSubmitted) {
        setScreen('guided-waiting-submitted');
      } else {
        setScreen('guided-scenario');
      }
    } else if (status === 'results') {
      setScreen('guided-student-results');
    } else if (status === 'closed') {
      setScreen('guided-closed');
    } else if (status === 'paused') {
      setScreen('guided-waiting');
    }
  }, [mode, screen, guidedRoom.roomStatus, guidedRoom.hasSubmitted]);

  // Determine backgrounds
  let bgImages = allBackgroundImages;
  if (screen === 'scenario' && currentScenario) {
    const scenarioBg = scenarioBackgrounds[currentScenario.id];
    if (scenarioBg) bgImages = [scenarioBg];
  }

  let content = null;

  // Start screen
  if (screen === 'start') {
    content = (
      <StartScreen
        onStartIndividual={handleStartIndividual}
        onCreateRoom={handleCreateRoom}
        onJoinRoom={handleJoinScreen}
      />
    );
  }
  // Individual mode
  else if (screen === 'scenario' && mode === 'individual' && currentScenario) {
    content = (
      <ScenarioScreen
        scenario={currentScenario}
        currentSelection={currentSelection}
        onToggle={toggleCharacter}
        onConfirm={confirmSelection}
        onNext={handleNext}
        onSkip={handleSkip}
        onFinish={handleFinish}
        isLast={isLastScenario}
        scenarioNumber={currentIndex + 1}
        totalScenarios={totalScenarios}
      />
    );
  } else if (screen === 'end' && mode === 'individual') {
    content = <EndScreen selections={selections} onRestart={handleRestart} />;
  }
  // Teacher guided mode
  else if (screen === 'guided-lobby') {
    content = (
      <TeacherLobby
        roomCode={guidedRoom.roomCode}
        playerCount={guidedRoom.playerCount}
        connectionCount={guidedRoom.connectionCount}
        onStartRound={handleStartRound}
        onEndSession={handleEndSession}
      />
    );
  } else if (screen === 'guided-playing') {
    content = (
      <TeacherRoundView
        scenarioId={guidedRoom.currentScenarioId}
        playerCount={guidedRoom.playerCount}
        submittedCount={guidedRoom.submittedCount}
        onCloseRound={handleCloseRound}
      />
    );
  } else if (screen === 'guided-results') {
    content = (
      <TeacherResultsView
        scenarioId={guidedRoom.currentScenarioId}
        aggregatedResults={guidedRoom.aggregatedResults}
        aggregatedByGender={guidedRoom.aggregatedByGender}
        playerCount={guidedRoom.playerCount}
        onNextRound={handleNextRound}
        onEndSession={handleEndSession}
      />
    );
  }
  // Student guided mode
  else if (screen === 'guided-join') {
    content = (
      <StudentJoin
        onJoin={handleJoinRoom}
        error={guidedRoom.error}
      />
    );
  } else if (screen === 'guided-waiting') {
    content = <StudentWaiting variant="waiting" onBackToStart={handleBackToStart} />;
  } else if (screen === 'guided-waiting-submitted') {
    content = <StudentWaiting variant="submitted" onBackToStart={handleBackToStart} />;
  } else if (screen === 'guided-scenario') {
    content = (
      <StudentScenarioWrapper
        scenarioId={guidedRoom.currentScenarioId}
        onSubmit={handleStudentSubmit}
      />
    );
  } else if (screen === 'guided-student-results') {
    content = <StudentResultsView />;
  } else if (screen === 'guided-closed') {
    content = (
      <StudentWaiting
        variant="closed"
        roomClosed
        onBackToStart={handleBackToStart}
      />
    );
  }

  return (
    <>
      <SceneBackground images={bgImages} />
      <LanguageToggle />
      {content}
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
