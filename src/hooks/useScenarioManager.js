import { useState, useMemo, useCallback } from 'react';
import scenariosData from '../data/scenarios.json';
import { shuffle } from '../utils/shuffle';

export function useScenarioManager() {
  const shuffledScenarios = useMemo(() => {
    return shuffle(scenariosData).map(scenario => ({
      ...scenario,
      characters: shuffle(scenario.characters),
    }));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState([]);
  const [currentSelection, setCurrentSelection] = useState([]);

  const currentScenario = shuffledScenarios[currentIndex] || null;
  const totalScenarios = shuffledScenarios.length;
  const isLastScenario = currentIndex >= totalScenarios - 1;

  const toggleCharacter = useCallback((characterId) => {
    if (!currentScenario) return;
    setCurrentSelection(prev => {
      if (prev.includes(characterId)) {
        return prev.filter(id => id !== characterId);
      }
      if (prev.length >= currentScenario.toSelect) {
        return prev;
      }
      return [...prev, characterId];
    });
  }, [currentScenario]);

  const confirmSelection = useCallback(() => {
    if (!currentScenario) return false;
    if (currentSelection.length !== currentScenario.toSelect) return false;

    const selectedChars = currentScenario.characters.filter(c =>
      currentSelection.includes(c.id)
    );

    setSelections(prev => [
      ...prev,
      {
        scenarioId: currentScenario.id,
        scenarioTitle: currentScenario.title,
        selected: selectedChars,
        toSelect: currentScenario.toSelect,
        totalCharacters: currentScenario.characters.length,
      },
    ]);
    return true;
  }, [currentScenario, currentSelection]);

  const nextScenario = useCallback(() => {
    setCurrentSelection([]);
    setCurrentIndex(prev => prev + 1);
  }, []);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setSelections([]);
    setCurrentSelection([]);
  }, []);

  return {
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
  };
}
