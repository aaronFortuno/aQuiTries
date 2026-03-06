import scenariosCa from '../data/scenarios.json';
import scenariosEs from '../data/scenarios_es.json';

const scenariosByLocale = { ca: scenariosCa, es: scenariosEs };

export function getAllScenarios(locale = 'ca') {
  return scenariosByLocale[locale] || scenariosCa;
}

export function getScenarioById(id, locale = 'ca') {
  const scenarios = getAllScenarios(locale);
  return scenarios.find((s) => s.id === id) || null;
}
