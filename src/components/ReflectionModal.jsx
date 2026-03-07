import { useEffect } from 'react';
import { useTranslation } from '../i18n';
import '../styles/modal.css';

export default function ReflectionModal({ scenario, selectedCharacters, onNext, isLast }) {
  const { t } = useTranslation();

  useEffect(() => {
    document.body.classList.add('overlay-open');
    return () => document.body.classList.remove('overlay-open');
  }, []);
  const maleCount = selectedCharacters.filter(c => c.sex === 'home').length;
  const femaleCount = selectedCharacters.filter(c => c.sex === 'dona').length;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className="modal__title">{scenario.reflectionTitle}</h2>

        <div className="modal__selection-summary">
          <h3>{t('ui.youChose')}</h3>
          <ul className="modal__selected-list">
            {selectedCharacters.map(c => (
              <li key={c.id} className="modal__selected-item">
                <strong>{c.name}</strong> — {c.description}
              </li>
            ))}
          </ul>
          <p className="modal__gender-summary">
            {maleCount} {maleCount === 1 ? t('ui.man') : t('ui.men')} i {femaleCount} {femaleCount === 1 ? t('ui.woman') : t('ui.women')}
          </p>
        </div>

        <p className="modal__reflection">{scenario.reflectionText}</p>

        <div className="modal__debate">
          <h3>{t('ui.debateQuestions')}</h3>
          <ul className="modal__debate-list">
            {scenario.debateQuestions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>

        <button className="modal__button" onClick={onNext}>
          {isLast ? t('ui.seeSummary') : t('ui.nextScenario')}
        </button>
      </div>
    </div>
  );
}
