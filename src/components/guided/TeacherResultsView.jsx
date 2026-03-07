import { useMemo, useState } from 'react';
import { useTranslation } from '../../i18n';
import { getScenarioById, getAllScenarios } from '../../utils/getScenarios';
import Avatar from '../Avatar';
import '../../styles/guided.css';

export default function TeacherResultsView({
  scenarioId,
  aggregatedResults,
  aggregatedByGender,
  playerCount,
  onNextRound,
  onStartRound,
  onEndSession,
}) {
  const { t, locale } = useTranslation();
  const scenario = useMemo(() => getScenarioById(scenarioId, locale), [scenarioId, locale]);
  const scenarios = useMemo(() => getAllScenarios(locale), [locale]);
  const [genderFilter, setGenderFilter] = useState('all');
  const [selectedScenarioId, setSelectedScenarioId] = useState('');

  const handleRandomScenario = () => {
    const idx = Math.floor(Math.random() * scenarios.length);
    setSelectedScenarioId(scenarios[idx].id);
  };

  const handleStartNextRound = () => {
    if (selectedScenarioId) {
      onStartRound(selectedScenarioId);
    }
  };

  const characterMap = useMemo(() => {
    if (!scenario) return {};
    const map = {};
    scenario.characters.forEach((c) => { map[c.id] = c; });
    return map;
  }, [scenario]);

  const votesToShow = useMemo(() => {
    if (genderFilter === 'all') return aggregatedResults;
    const genderKey = genderFilter === 'boys' ? 'noi' : 'noia';
    return aggregatedByGender[genderKey] || {};
  }, [genderFilter, aggregatedResults, aggregatedByGender]);

  const sortedCharacters = useMemo(() => {
    if (!scenario) return [];
    return [...scenario.characters]
      .map((c) => ({ ...c, votes: votesToShow[c.id] || 0 }))
      .sort((a, b) => b.votes - a.votes);
  }, [scenario, votesToShow]);

  // Gender aggregation across all results
  const genderStats = useMemo(() => {
    let male = 0;
    let female = 0;
    Object.entries(aggregatedResults).forEach(([charId, count]) => {
      const char = characterMap[charId];
      if (!char) return;
      if (char.sex === 'home') male += count;
      else if (char.sex === 'dona') female += count;
    });
    return { male, female, total: male + female };
  }, [aggregatedResults, characterMap]);

  if (!scenario) return null;

  return (
    <div className="guided-results">
      <div className="guided-results__panel">
        <h2 className="guided-results__title">{scenario.title}</h2>

        <div className="guided-results__gender-bar">
          <div className="guided-results__bar">
            {genderStats.total > 0 && (
              <>
                <div
                  className="guided-results__bar-male"
                  style={{ width: `${(genderStats.male / genderStats.total) * 100}%` }}
                >
                  {genderStats.male > 0 && `${Math.round((genderStats.male / genderStats.total) * 100)}%`}
                </div>
                <div
                  className="guided-results__bar-female"
                  style={{ width: `${(genderStats.female / genderStats.total) * 100}%` }}
                >
                  {genderStats.female > 0 && `${Math.round((genderStats.female / genderStats.total) * 100)}%`}
                </div>
              </>
            )}
          </div>
          <div className="guided-results__bar-legend">
            <span>{t('ui.menLabel')}</span>
            <span>{t('ui.womenLabel')}</span>
          </div>
        </div>

        <div className="guided-results__filters">
          <button
            className={`guided-results__filter-btn ${genderFilter === 'all' ? 'guided-results__filter-btn--active' : ''}`}
            onClick={() => setGenderFilter('all')}
          >
            {t('ui.genderFilterAll')}
          </button>
          <button
            className={`guided-results__filter-btn ${genderFilter === 'boys' ? 'guided-results__filter-btn--active' : ''}`}
            onClick={() => setGenderFilter('boys')}
          >
            {t('ui.genderFilterBoys')}
          </button>
          <button
            className={`guided-results__filter-btn ${genderFilter === 'girls' ? 'guided-results__filter-btn--active' : ''}`}
            onClick={() => setGenderFilter('girls')}
          >
            {t('ui.genderFilterGirls')}
          </button>
        </div>

        <div className="guided-results__characters">
          {sortedCharacters.map((char) => (
            <div key={char.id} className="guided-results__character">
              <div className="guided-results__character-avatar">
                <Avatar character={char} />
              </div>
              <div className="guided-results__character-info">
                <span className="guided-results__character-name">{char.name}</span>
                <span className="guided-results__character-desc">{char.description}</span>
              </div>
              <div className="guided-results__character-votes">
                <span className="guided-results__vote-count">{char.votes}</span>
                <span className="guided-results__vote-label">
                  {char.votes === 1
                    ? t('ui.oneVoteForCharacter')
                    : t('ui.votesForCharacter', { count: char.votes })}
                </span>
              </div>
            </div>
          ))}
        </div>

        {scenario.reflectionText && (
          <div className="guided-results__reflection">
            <h3>{scenario.reflectionTitle}</h3>
            <p>{scenario.reflectionText}</p>
            {scenario.debateQuestions && (
              <div className="guided-results__debate">
                <h4>{t('ui.debateQuestions')}</h4>
                <ol>
                  {scenario.debateQuestions.map((q, i) => (
                    <li key={i}>{q}</li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}

        <div className="guided-results__next-round">
          <label htmlFor="next-scenario-select">{t('ui.selectNextScenario')}</label>
          <div className="guided-lobby__scenario-row">
            <select
              id="next-scenario-select"
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
              <i className="fa-solid fa-dice" />
            </button>
          </div>
        </div>

        <p className="guided-results__end-reminder">{t('ui.endSessionReminder')}</p>

        <div className="guided-results__actions">
          <button
            className="guided-results__next-btn"
            onClick={handleStartNextRound}
            disabled={!selectedScenarioId}
          >
            {t('ui.startNextRound')}
          </button>
          <button className="guided-results__end-btn" onClick={onEndSession}>
            {t('ui.endSessionGuided')}
          </button>
        </div>
      </div>
    </div>
  );
}
