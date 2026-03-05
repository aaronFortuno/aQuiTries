import SkillBar from './SkillBar';
import '../styles/characters.css';

export default function CharacterTooltip({ character, onClose }) {
  return (
    <div className="tooltip" onClick={(e) => e.stopPropagation()}>
      <button className="tooltip__close" onClick={onClose} aria-label="Tancar">
        &times;
      </button>
      <h3 className="tooltip__name">{character.name}</h3>
      <div className="tooltip__details">
        <span>{character.age} anys</span>
        <span>{character.height} cm</span>
        <span>{character.weight} kg</span>
      </div>
      <p className="tooltip__description">{character.description}</p>
      <div className="tooltip__traits">
        {character.traits.map(trait => (
          <span key={trait} className="tooltip__trait">{trait}</span>
        ))}
      </div>
      <div className="tooltip__skills">
        {Object.entries(character.skills).map(([skill, value]) => (
          <SkillBar key={skill} label={skill} value={value} />
        ))}
      </div>
    </div>
  );
}
