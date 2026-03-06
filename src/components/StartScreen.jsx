import { useTranslation } from '../i18n';
import '../styles/global.css';

export default function StartScreen({ onStart }) {
  const { t } = useTranslation();

  return (
    <div className="start-screen">
      <div className="start-screen__content">
        <h1 className="start-screen__title">{t('ui.startTitle')}</h1>
        <p className="start-screen__subtitle">
          {t('ui.startSubtitle')}
        </p>
        <div className="start-screen__description">
          <p>{t('ui.startDescription1')}</p>
          <p>{t('ui.startDescription2')}</p>
        </div>
        <button className="start-screen__button" onClick={onStart}>
          {t('ui.startButton')}
        </button>
      </div>
    </div>
  );
}
