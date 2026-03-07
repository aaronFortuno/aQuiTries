import { useState } from 'react';
import { useTranslation } from '../../i18n';
import { getAllScenarios } from '../../utils/getScenarios';
import '../../styles/guided.css';

export default function TeacherLobby({
  roomCode,
  playerCount,
  connectionCount,
  onStartRound,
  onEndSession,
}) {
  const { t, locale } = useTranslation();
  const scenarios = getAllScenarios(locale);
  const [selectedScenarioId, setSelectedScenarioId] = useState('');

  const canStart = playerCount > 0 && selectedScenarioId;

  const handleRandomScenario = () => {
    const idx = Math.floor(Math.random() * scenarios.length);
    setSelectedScenarioId(scenarios[idx].id);
  };

  const handleStart = () => {
    if (canStart) {
      onStartRound(selectedScenarioId);
    }
  };

  return (
    <div className="guided-lobby">
      <div className="guided-lobby__panel">
        <div className="guided-lobby__code-section">
          <span className="guided-lobby__code-label">{t('ui.roomCode')}</span>
          <span className="guided-lobby__code">{roomCode}</span>
        </div>

        <div className="guided-lobby__status">
          {playerCount > 0
            ? t('ui.studentsConnected', { count: playerCount })
            : t('ui.noStudents')}
        </div>

        <div className="guided-lobby__scenario-select">
          <label htmlFor="scenario-select">{t('ui.selectScenario')}</label>
          <div className="guided-lobby__scenario-row">
            <select
              id="scenario-select"
              value={selectedScenarioId}
              onChange={(e) => setSelectedScenarioId(e.target.value)}
            >
              <option value="">{t('ui.selectScenarioFirst')}</option>
              {scenarios.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title} ({s.category})
                </option>
              ))}
            </select>
            <button
              className="guided-lobby__random-btn"
              onClick={handleRandomScenario}
              title={t('ui.randomScenario')}
            >
              🎲
            </button>
          </div>
        </div>

        {connectionCount !== null && (
          <div className={`guided-lobby__capacity ${connectionCount >= 80 ? 'guided-lobby__capacity--warning' : ''}`}>
            <span className="guided-lobby__capacity-label">{t('ui.serverCapacity')}</span>
            <span className="guided-lobby__capacity-value">
              {t('ui.availableSlots', { available: Math.max(0, 100 - connectionCount), total: 100 })}
            </span>
          </div>
        )}

        <p className="guided-lobby__expiry-warning">{t('ui.roomExpiryWarning')}</p>
        <p className="guided-lobby__end-reminder">{t('ui.endSessionReminder')}</p>

        <div className="guided-lobby__actions">
          <button
            className="guided-lobby__start-btn"
            onClick={handleStart}
            disabled={!canStart}
          >
            {t('ui.startRound')}
          </button>
          <button
            className="guided-lobby__end-btn"
            onClick={onEndSession}
          >
            {t('ui.endSessionGuided')}
          </button>
        </div>
      </div>
    </div>
  );
}
