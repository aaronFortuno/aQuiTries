import { useState } from 'react';
import CharacterCard from './CharacterCard';
import SelectionCounter from './SelectionCounter';
import ReflectionModal from './ReflectionModal';
import { useTranslation } from '../i18n';
import '../styles/scenario.css';

const SKILL_KEYS = [
  { shortKey: 'F', i18nKey: 'skills.forca' },
  { shortKey: 'V', i18nKey: 'skills.velocitat' },
  { shortKey: 'R', i18nKey: 'skills.resistencia' },
  { shortKey: 'P', i18nKey: 'skills.precisio' },
  { shortKey: 'TE', i18nKey: 'skills.treballEnEquip' },
];

export default function ScenarioScreen({
  scenario,
  currentSelection,
  onToggle,
  onConfirm,
  onNext,
  isLast,
  scenarioNumber,
  totalScenarios,
}) {
  const [showReflection, setShowReflection] = useState(false);
  const { t } = useTranslation();
  const selectionComplete = currentSelection.length === scenario.toSelect;

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
      <header className="scenario__header">
        <span className="scenario__progress">
          {t('ui.scenarioProgress', { current: scenarioNumber, total: totalScenarios })}
        </span>
        <h2 className="scenario__title">{scenario.title}</h2>
        <p className="scenario__context">{scenario.context}</p>
        <p className="scenario__instruction">{scenario.description}</p>
      </header>

      <SelectionCounter
        current={currentSelection.length}
        total={scenario.toSelect}
      />

      <div className="scenario__grid">
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

      <div className="skills-legend">
        {SKILL_KEYS.map(({ shortKey, i18nKey }) => (
          <span key={shortKey} className="skills-legend__item">
            {shortKey}: {t(i18nKey)}
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
