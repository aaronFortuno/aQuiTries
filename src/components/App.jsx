import { useState } from 'react';
import StartScreen from './StartScreen';
import ScenarioScreen from './ScenarioScreen';
import EndScreen from './EndScreen';
import { useScenarioManager } from '../hooks/useScenarioManager';

export default function App() {
  const [screen, setScreen] = useState('start');
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
    reset,
  } = useScenarioManager();

  const handleStart = () => setScreen('scenario');

  const handleNext = () => {
    if (isLastScenario) {
      setScreen('end');
    } else {
      nextScenario();
    }
  };

  const handleRestart = () => {
    reset();
    setScreen('start');
  };

  if (screen === 'start') {
    return <StartScreen onStart={handleStart} />;
  }

  if (screen === 'scenario' && currentScenario) {
    return (
      <ScenarioScreen
        scenario={currentScenario}
        currentSelection={currentSelection}
        onToggle={toggleCharacter}
        onConfirm={confirmSelection}
        onNext={handleNext}
        isLast={isLastScenario}
        scenarioNumber={currentIndex + 1}
        totalScenarios={totalScenarios}
      />
    );
  }

  if (screen === 'end') {
    return <EndScreen selections={selections} onRestart={handleRestart} />;
  }

  return null;
}
