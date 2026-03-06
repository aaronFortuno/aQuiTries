import { useTranslation } from '../../i18n';
import '../../styles/guided.css';

export default function StudentResultsView() {
  const { t } = useTranslation();

  return (
    <div className="guided-waiting">
      <div className="guided-waiting__panel">
        <p className="guided-waiting__text">{t('ui.selectionSent')}</p>
        <p className="guided-waiting__subtext">{t('ui.waitingForTeacher')}</p>
      </div>
    </div>
  );
}
