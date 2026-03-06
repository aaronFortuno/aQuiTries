import { useState, useCallback, useMemo } from 'react';
import ScenarioScreen from '../ScenarioScreen';
import { useTranslation } from '../../i18n';
import { getScenarioById } from '../../utils/getScenarios';
import { shuffle } from '../../utils/shuffle';

export default function StudentScenarioWrapper({ scenarioId, onSubmit }) {
  const { locale } = useTranslation();

  const scenario = useMemo(() => {
    const s = getScenarioById(scenarioId, locale);
    if (!s) return null;
    return { ...s, characters: shuffle(s.characters) };
  }, [scenarioId, locale]);

  const [currentSelection, setCurrentSelection] = useState([]);

  const toggleCharacter = useCallback((characterId) => {
    if (!scenario) return;
    setCurrentSelection((prev) => {
      if (prev.includes(characterId)) {
        return prev.filter((id) => id !== characterId);
      }
      if (prev.length >= scenario.toSelect) {
        return prev;
      }
      return [...prev, characterId];
    });
  }, [scenario]);

  const confirmSelection = useCallback(() => {
    if (!scenario) return false;
    if (currentSelection.length !== scenario.toSelect) return false;
    onSubmit(currentSelection);
    return true;
  }, [scenario, currentSelection, onSubmit]);

  if (!scenario) return null;

  return (
    <div className="guided-student">
      <ScenarioScreen
        scenario={scenario}
        currentSelection={currentSelection}
        onToggle={toggleCharacter}
        onConfirm={confirmSelection}
        onNext={() => {}}
        onSkip={() => {}}
        onFinish={() => {}}
        isLast={false}
        scenarioNumber={1}
        totalScenarios={1}
      />
    </div>
  );
}
