import { useState, useMemo, useCallback } from 'react';
import scenariosCa from '../data/scenarios.json';
import scenariosEs from '../data/scenarios_es.json';
import { shuffle } from '../utils/shuffle';

const scenariosByLocale = { ca: scenariosCa, es: scenariosEs };

export function useScenarioManager(locale = 'ca') {
  const scenarios = useMemo(() => {
    const data = scenariosByLocale[locale] || scenariosCa;
    return data.map(scenario => ({
      ...scenario,
      characters: shuffle(scenario.characters),
    }));
  }, [locale]);

  const allBackgrounds = useMemo(() => {
    return scenarios.map(s => s.background).filter(Boolean);
  }, [scenarios]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState([]);
  const [currentSelection, setCurrentSelection] = useState([]);

  const currentScenario = scenarios[currentIndex] || null;
  const totalScenarios = scenarios.length;
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
    allBackgrounds,
    toggleCharacter,
    confirmSelection,
    nextScenario,
    reset,
  };
}
