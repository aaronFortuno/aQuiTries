import { useState, useCallback } from 'react';
import Avatar from './Avatar';
import SkillBar from './SkillBar';
import CharacterTooltip from './CharacterTooltip';
import '../styles/characters.css';

export default function CharacterCard({ character, isSelected, onToggle, disabled }) {
  const [showPreview, setShowPreview] = useState(false);

  const handleCardClick = useCallback(() => {
    setShowPreview(true);
  }, []);

  const handleCheckbox = useCallback((e) => {
    e.stopPropagation();
    onToggle(character.id);
  }, [character.id, onToggle]);

  return (
    <div
      className={`character-card ${isSelected ? 'character-card--selected' : ''} ${disabled ? 'character-card--disabled' : ''}`}
      onClick={handleCardClick}
    >
      <div className="character-card__body">
        <div className="character-card__avatar">
          <Avatar character={character} />
        </div>
        <span className="character-card__name">{character.name}</span>
        <p className="character-card__desc">{character.description}</p>
      </div>
      <div className="character-card__skills">
        {Object.entries(character.skills).map(([skill, value]) => (
          <SkillBar key={skill} label={skill} value={value} compact />
        ))}
      </div>
      <label
        className={`character-card__select ${isSelected ? 'character-card__select--active' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckbox}
          disabled={disabled}
          className="character-card__checkbox"
        />
        <span className="character-card__select-label">
          {isSelected ? '✓' : ''}
        </span>
      </label>
      {showPreview && (
        <CharacterTooltip
          character={character}
          onClose={(e) => { if (e) e.stopPropagation(); setShowPreview(false); }}
        />
      )}
    </div>
  );
}
