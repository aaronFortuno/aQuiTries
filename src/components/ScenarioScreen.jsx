import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import CharacterCard from './CharacterCard';
import SelectionCounter from './SelectionCounter';
import ReflectionModal from './ReflectionModal';
import { useTranslation } from '../i18n';
import '../styles/scenario.css';

const SCROLL_SPEED = 6;

export default function ScenarioScreen({
  scenario,
  currentSelection,
  onToggle,
  onConfirm,
  onNext,
  onSkip,
  onFinish,
  isLast,
  scenarioNumber,
  totalScenarios,
}) {
  const [showReflection, setShowReflection] = useState(false);
  const { t } = useTranslation();

  // Derive skill keys dynamically from the first character's skills
  const skillKeys = useMemo(() => {
    if (!scenario.characters.length) return [];
    const skills = scenario.characters[0].skills;
    return Object.keys(skills).map(key => ({
      key,
      short: t(`skillsShort.${key}`) || key.charAt(0).toUpperCase(),
      name: t(`skillNames.${key}`) || key,
    }));
  }, [scenario, t]);
  const selectionComplete = currentSelection.length === scenario.toSelect;

  const gridRef = useRef(null);
  const scrollInterval = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = gridRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState, scenario]);

  const startScroll = useCallback((direction) => {
    if (scrollInterval.current) return;
    const step = () => {
      const el = gridRef.current;
      if (!el) return;
      el.scrollLeft += direction * SCROLL_SPEED;
      scrollInterval.current = requestAnimationFrame(step);
    };
    scrollInterval.current = requestAnimationFrame(step);
  }, []);

  const stopScroll = useCallback(() => {
    if (scrollInterval.current) {
      cancelAnimationFrame(scrollInterval.current);
      scrollInterval.current = null;
    }
  }, []);

  const handleConfirm = () => {
    const success = onConfirm();
    if (success) setShowReflection(true);
  };

  const handleNext = () => {
    setShowReflection(false);
    onNext();
  };

  const selectedCharacters = scenario.characters.filter(c =>
    currentSelection.includes(c.id)
  );

  return (
    <div className="scenario">
      <header className="scenario__topbar">
        <h2 className="scenario__title">{scenario.title}</h2>
        <div className="scenario__topbar-right">
          <span className="scenario__progress">
            {t('ui.scenarioProgress', { current: scenarioNumber, total: totalScenarios })}
          </span>
          <button className="scenario__toolbar-btn" onClick={onSkip}>
            {t('ui.skipScenario')}
          </button>
          <button className="scenario__toolbar-btn scenario__toolbar-btn--finish" onClick={onFinish}>
            {t('ui.finishSession')}
          </button>
        </div>
      </header>

      <div className="scenario__briefing">
        <p className="scenario__instruction">{scenario.description}</p>
        <p className="scenario__context">{scenario.context}</p>
      </div>

      <SelectionCounter
        current={currentSelection.length}
        total={scenario.toSelect}
      />

      <div className="scenario__gallery">
        <div
          className={`scenario__arrow scenario__arrow--left ${!canScrollLeft ? 'scenario__arrow--hidden' : ''}`}
          onMouseEnter={() => canScrollLeft && startScroll(-1)}
          onMouseLeave={stopScroll}
        >
          ‹
        </div>

        <div className="scenario__grid" ref={gridRef}>
          {scenario.characters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={currentSelection.includes(character.id)}
              onToggle={onToggle}
              disabled={!currentSelection.includes(character.id) && selectionComplete}
            />
          ))}
        </div>

        <div
          className={`scenario__arrow scenario__arrow--right ${!canScrollRight ? 'scenario__arrow--hidden' : ''}`}
          onMouseEnter={() => canScrollRight && startScroll(1)}
          onMouseLeave={stopScroll}
        >
          ›
        </div>
      </div>

      <div className="skills-legend">
        {skillKeys.map(({ key, short, name }) => (
          <span key={key} className="skills-legend__item">
            {short}: {name}
          </span>
        ))}
      </div>

      <div className="scenario__actions">
        <button
          className="scenario__confirm-btn"
          onClick={handleConfirm}
          disabled={!selectionComplete}
        >
          {t('ui.confirmButton')}
        </button>
      </div>

      {showReflection && (
        <ReflectionModal
          scenario={scenario}
          selectedCharacters={selectedCharacters}
          onNext={handleNext}
          isLast={isLast}
        />
      )}
    </div>
  );
}
