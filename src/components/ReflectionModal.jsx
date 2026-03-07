import { useState, useEffect, useRef, useCallback } from 'react';
import Avatar from './Avatar';
import SkillBar from './SkillBar';
import { useTranslation } from '../i18n';
import '../styles/modal.css';

const SCROLL_SPEED = 6;

function ReflectionCard({ character }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="modal__char-card"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(v => !v)}
    >
      <div className="modal__char-avatar">
        <Avatar character={character} />
      </div>
      <span className="modal__char-name">{character.name}</span>
      <div className="modal__char-skills">
        {Object.entries(character.skills).map(([skill, value]) => (
          <SkillBar key={skill} label={skill} value={value} compact />
        ))}
      </div>
      {showTooltip && (
        <div className="modal__char-tooltip">
          <p>{character.description}</p>
        </div>
      )}
    </div>
  );
}

export default function ReflectionModal({ scenario, selectedCharacters, onNext, isLast }) {
  const { t } = useTranslation();
  const gridRef = useRef(null);
  const scrollInterval = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    document.body.classList.add('overlay-open');
    return () => document.body.classList.remove('overlay-open');
  }, []);

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
  }, [updateScrollState]);

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

  const maleCount = selectedCharacters.filter(c => c.sex === 'home').length;
  const femaleCount = selectedCharacters.filter(c => c.sex === 'dona').length;

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className="modal__title">{scenario.reflectionTitle}</h2>

        <div className="modal__selection-summary">
          <h3>{t('ui.youChose')}</h3>
          <div className="modal__char-gallery">
            <div
              className={`modal__char-arrow modal__char-arrow--left ${!canScrollLeft ? 'modal__char-arrow--hidden' : ''}`}
              onMouseEnter={() => canScrollLeft && startScroll(-1)}
              onMouseLeave={stopScroll}
            >
              ‹
            </div>
            <div className="modal__char-grid" ref={gridRef}>
              {selectedCharacters.map(c => (
                <ReflectionCard key={c.id} character={c} />
              ))}
            </div>
            <div
              className={`modal__char-arrow modal__char-arrow--right ${!canScrollRight ? 'modal__char-arrow--hidden' : ''}`}
              onMouseEnter={() => canScrollRight && startScroll(1)}
              onMouseLeave={stopScroll}
            >
              ›
            </div>
          </div>
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
