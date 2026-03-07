import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import Avatar from './Avatar';
import SkillBar from './SkillBar';
import { useTranslation } from '../i18n';
import '../styles/characters.css';

export default function CharacterTooltip({ character, onClose }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add('overlay-open');
    return () => document.body.classList.remove('overlay-open');
  }, []);

  return createPortal(
    <div className="character-preview-backdrop" onClick={onClose}>
      <div className="character-preview" onClick={(e) => e.stopPropagation()}>
        <div className="character-preview__top">
          <div className="character-preview__avatar">
            <Avatar character={character} />
          </div>
          <div className="character-preview__info">
            <div className="character-preview__header">
              <h3 className="character-preview__name">{character.name}</h3>
              <button className="character-preview__close" onClick={onClose} aria-label={t('ui.close')}>
                &times;
              </button>
            </div>
            <div className="character-preview__details">
              <span>{character.age} {t('ui.years')}</span>
              <span>{character.height} {t('ui.cm')}</span>
              <span>{character.weight} {t('ui.kg')}</span>
            </div>
            <p className="character-preview__description">{character.description}</p>
          </div>
        </div>
        <div className="character-preview__traits">
          {character.traits.map(trait => (
            <span key={trait} className="character-preview__trait">{trait}</span>
          ))}
        </div>
        <div className="character-preview__skills">
          {Object.entries(character.skills).map(([skill, value]) => (
            <SkillBar key={skill} label={skill} value={value} />
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
