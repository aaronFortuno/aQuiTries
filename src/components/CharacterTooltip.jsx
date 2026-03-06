import SkillBar from './SkillBar';
import { useTranslation } from '../i18n';
import '../styles/characters.css';

export default function CharacterTooltip({ character, onClose }) {
  const { t } = useTranslation();

  return (
    <div className="tooltip" onClick={(e) => e.stopPropagation()}>
      <button className="tooltip__close" onClick={onClose} aria-label={t('ui.close')}>
        &times;
      </button>
      <h3 className="tooltip__name">{character.name}</h3>
      <div className="tooltip__details">
        <span>{character.age} {t('ui.years')}</span>
        <span>{character.height} {t('ui.cm')}</span>
        <span>{character.weight} {t('ui.kg')}</span>
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
