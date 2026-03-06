import { useMemo } from 'react';
import CharacterCard from '../CharacterCard';
import { useTranslation } from '../../i18n';
import { getScenarioById } from '../../utils/getScenarios';
import '../../styles/guided.css';

export default function TeacherRoundView({
  scenarioId,
  playerCount,
  submittedCount,
  onCloseRound,
}) {
  const { t, locale } = useTranslation();
  const scenario = useMemo(() => getScenarioById(scenarioId, locale), [scenarioId, locale]);

  if (!scenario) return null;

  return (
    <div className="guided-round">
      <div className="guided-round__panel">
        <header className="guided-round__header">
          <h2 className="guided-round__title">{scenario.title}</h2>
          <span className="guided-round__category">{scenario.category}</span>
        </header>

        <div className="guided-round__briefing">
          <p className="guided-round__description">{scenario.description}</p>
          <p className="guided-round__context">{scenario.context}</p>
        </div>

        <div className="guided-round__characters">
          {scenario.characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={false}
              onToggle={() => {}}
              disabled
            />
          ))}
        </div>

        <div className="guided-round__status-bar">
          <span className="guided-round__counter">
            {t('ui.submittedCount', { submitted: submittedCount, total: playerCount })}
          </span>
          <button
            className="guided-round__close-btn"
            onClick={onCloseRound}
          >
            {t('ui.closeRound')}
          </button>
        </div>
      </div>
    </div>
  );
}
