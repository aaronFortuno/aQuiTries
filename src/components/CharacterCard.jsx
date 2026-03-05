import { useState, useCallback } from 'react';
import Avatar from './Avatar';
import CharacterTooltip from './CharacterTooltip';
import '../styles/characters.css';

export default function CharacterCard({ character, isSelected, onToggle, disabled }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = useCallback(() => {
    if (showTooltip) {
      onToggle(character.id);
      setShowTooltip(false);
    } else {
      setShowTooltip(true);
    }
  }, [showTooltip, character.id, onToggle]);

  const handleDesktopClick = useCallback((e) => {
    if ('ontouchstart' in window) return;
    onToggle(character.id);
  }, [character.id, onToggle]);

  const handleTouchEnd = useCallback((e) => {
    e.preventDefault();
    handleClick();
  }, [handleClick]);

  return (
    <div className={`character-card ${isSelected ? 'character-card--selected' : ''} ${disabled ? 'character-card--disabled' : ''}`}>
      <div
        className="character-card__body"
        onClick={handleDesktopClick}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => !('ontouchstart' in window) && setShowTooltip(true)}
        onMouseLeave={() => !('ontouchstart' in window) && setShowTooltip(false)}
      >
        <div className="character-card__avatar">
          <Avatar character={character} />
          {isSelected && <span className="character-card__badge">&#10003;</span>}
        </div>
        <span className="character-card__name">{character.name}</span>
      </div>
      {showTooltip && (
        <CharacterTooltip
          character={character}
          onClose={() => setShowTooltip(false)}
        />
      )}
    </div>
  );
}
