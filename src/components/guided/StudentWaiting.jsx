import { useTranslation } from '../../i18n';
import '../../styles/guided.css';

export default function StudentWaiting({ variant, roomClosed, onBackToStart }) {
  const { t } = useTranslation();

  if (roomClosed) {
    return (
      <div className="guided-waiting">
        <div className="guided-waiting__panel">
          <p className="guided-waiting__text">{t('ui.roomClosedMsg')}</p>
          <button className="guided-waiting__back-btn" onClick={onBackToStart}>
            {t('ui.backToStart')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="guided-waiting">
      <div className="guided-waiting__panel">
        <div className="guided-waiting__spinner" />
        <p className="guided-waiting__text">
          {variant === 'submitted'
            ? t('ui.selectionSent')
            : t('ui.waitingForTeacher')}
        </p>
        {variant === 'submitted' && (
          <p className="guided-waiting__subtext">{t('ui.waitingForOthers')}</p>
        )}
      </div>
    </div>
  );
}
