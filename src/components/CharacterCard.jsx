import { useState, useCallback } from 'react';
import Avatar from './Avatar';
import SkillBar from './SkillBar';
import CharacterTooltip from './CharacterTooltip';
import '../styles/characters.css';

export default function CharacterCard({ character, isSelected, onToggle, disabled }) {
  const [showPreview, setShowPreview] = useState(false);

  const handleDesktopClick = useCallback((e) => {
    if ('ontouchstart' in window) return;
    onToggle(character.id);
  }, [character.id, onToggle]);

  const handleTouchEnd = useCallback((e) => {
    e.preventDefault();
    if (showPreview) {
      onToggle(character.id);
      setShowPreview(false);
    } else {
      setShowPreview(true);
    }
  }, [showPreview, character.id, onToggle]);

  return (
    <div className={`character-card ${isSelected ? 'character-card--selected' : ''} ${disabled ? 'character-card--disabled' : ''}`}>
      <div
        className="character-card__body"
        onClick={handleDesktopClick}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => !('ontouchstart' in window) && setShowPreview(true)}
        onMouseLeave={() => !('ontouchstart' in window) && setShowPreview(false)}
      >
        <div className="character-card__avatar">
          <Avatar character={character} />
        </div>
        <span className="character-card__name">{character.name}</span>
        <p className="character-card__desc">{character.description}</p>
        {isSelected && <span className="character-card__badge">&#10003;</span>}
      </div>
      <div className="character-card__skills">
        {Object.entries(character.skills).map(([skill, value]) => (
          <SkillBar key={skill} label={skill} value={value} compact />
        ))}
      </div>
      {showPreview && (
        <CharacterTooltip
          character={character}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
}
