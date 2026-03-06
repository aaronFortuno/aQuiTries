import { useState } from 'react';
import { useTranslation } from '../../i18n';
import '../../styles/guided.css';

export default function StudentJoin({ onJoin, error }) {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [gender, setGender] = useState('ns');
  const [step, setStep] = useState('code'); // 'code' | 'gender'

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (code.length === 4) {
      setStep('gender');
    }
  };

  const handleJoin = () => {
    onJoin(code, gender);
  };

  const errorMessage = error === 'ROOM_NOT_FOUND'
    ? t('ui.roomNotFound')
    : error === 'ROOM_CLOSED'
      ? t('ui.roomClosed')
      : error === 'CONNECTION_LIMIT'
        ? t('ui.connectionLimit')
        : error || null;

  return (
    <div className="guided-join">
      <div className="guided-join__panel">
        {step === 'code' && (
          <form onSubmit={handleCodeSubmit} className="guided-join__form">
            <label className="guided-join__label">{t('ui.enterRoomCode')}</label>
            <input
              className="guided-join__input"
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={4}
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 4))}
              autoFocus
              placeholder="0000"
            />
            <button
              className="guided-join__submit-btn"
              type="submit"
              disabled={code.length !== 4}
            >
              {t('ui.joinButton')}
            </button>
          </form>
        )}

        {step === 'gender' && (
          <div className="guided-join__gender">
            <label className="guided-join__label">{t('ui.selectGender')}</label>
            <div className="guided-join__gender-options">
              <button
                className={`guided-join__gender-btn ${gender === 'noi' ? 'guided-join__gender-btn--active' : ''}`}
                onClick={() => setGender('noi')}
              >
                {t('ui.genderBoy')}
              </button>
              <button
                className={`guided-join__gender-btn ${gender === 'noia' ? 'guided-join__gender-btn--active' : ''}`}
                onClick={() => setGender('noia')}
              >
                {t('ui.genderGirl')}
              </button>
              <button
                className={`guided-join__gender-btn ${gender === 'ns' ? 'guided-join__gender-btn--active' : ''}`}
                onClick={() => setGender('ns')}
              >
                {t('ui.genderPreferNot')}
              </button>
            </div>
            <button
              className="guided-join__submit-btn"
              onClick={handleJoin}
            >
              {t('ui.joinButton')}
            </button>
          </div>
        )}

        {errorMessage && (
          <p className="guided-join__error">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}
