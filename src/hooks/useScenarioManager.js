import { useState, useMemo, useCallback, useRef } from 'react';
import scenariosCa from '../data/scenarios.json';
import scenariosEs from '../data/scenarios_es.json';
import { shuffle } from '../utils/shuffle';

const scenariosByLocale = { ca: scenariosCa, es: scenariosEs };

export function useScenarioManager(locale = 'ca') {
  const scenarios = useMemo(() => {
    const data = scenariosByLocale[locale] || scenariosCa;
    return shuffle(data.map(scenario => ({
      ...scenario,
      characters: shuffle(scenario.characters),
    })));
  }, [locale]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState([]);
  const [currentSelection, setCurrentSelection] = useState([]);
  const [completedIds, setCompletedIds] = useState([]);

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
    setCompletedIds(prev => [...prev, currentScenario.id]);
    return true;
  }, [currentScenario, currentSelection]);

  const nextScenario = useCallback(() => {
    setCurrentSelection([]);
    setCurrentIndex(prev => prev + 1);
  }, []);

  const skipScenario = useCallback(() => {
    setCurrentSelection([]);
    // Find next scenario not yet completed; if all done, just advance
    const nextIdx = scenarios.findIndex(
      (s, i) => i > currentIndex && !completedIds.includes(s.id)
    );
    if (nextIdx !== -1) {
      setCurrentIndex(nextIdx);
    } else {
      // Wrap around to find any uncompleted
      const wrapIdx = scenarios.findIndex(
        (s) => !completedIds.includes(s.id) && s.id !== currentScenario?.id
      );
      if (wrapIdx !== -1) {
        setCurrentIndex(wrapIdx);
      } else {
        // All completed or only one left, just go next
        setCurrentIndex(prev => prev + 1);
      }
    }
  }, [scenarios, currentIndex, completedIds, currentScenario]);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setSelections([]);
    setCurrentSelection([]);
    setCompletedIds([]);
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
    skipScenario,
    reset,
  };
}
