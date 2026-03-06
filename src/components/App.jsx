import { useState } from 'react';
import StartScreen from './StartScreen';
import ScenarioScreen from './ScenarioScreen';
import EndScreen from './EndScreen';
import SceneBackground from './SceneBackground';
import { I18nProvider, useTranslation } from '../i18n';
import { useScenarioManager } from '../hooks/useScenarioManager';

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
  const { locale } = useTranslation();
  const {
    currentScenario,
    currentIndex,
    totalScenarios,
    isLastScenario,
    currentSelection,
    selections,
    allBackgrounds,
    toggleCharacter,
    confirmSelection,
    nextScenario,
    reset,
  } = useScenarioManager(locale);

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

  // Determine which background(s) to show
  let bgImages = allBackgrounds;
  if (screen === 'scenario' && currentScenario?.background) {
    bgImages = [currentScenario.background];
  }

  let content = null;

  if (screen === 'start') {
    content = <StartScreen onStart={handleStart} />;
  } else if (screen === 'scenario' && currentScenario) {
    content = (
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
  } else if (screen === 'end') {
    content = <EndScreen selections={selections} onRestart={handleRestart} />;
  }

  return (
    <>
      {bgImages.length > 0 && <SceneBackground images={bgImages} />}
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
