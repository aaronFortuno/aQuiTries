import { useTranslation } from '../i18n';
import '../styles/scenario.css';

export default function SelectionCounter({ current, total }) {
  const { t } = useTranslation();

  return (
    <div className="selection-counter">
      <span
        className="selection-counter__text"
        dangerouslySetInnerHTML={{
          __html: t('ui.selectionText', { current, total }),
        }}
      />
      <div className="selection-counter__dots">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`selection-counter__dot ${i < current ? 'selection-counter__dot--filled' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
