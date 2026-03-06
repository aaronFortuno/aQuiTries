import tribuPaleolitica from './tribu-paleolitica.png';
import arbreCaigut from './arbre-caigut.png';
import incendiForestal from './incendi-forestal.png';
import personaArmada from './persona-armada.png';
import obraConstruccio from './obra-construccio.png';
import llarInfants from './llar-infants.png';

// Map scenario ID → background image URL (resolved by Vite)
export const scenarioBackgrounds = {
  P1: tribuPaleolitica,
  A2: arbreCaigut,
  A3: incendiForestal,
  A4: personaArmada,
  A5: obraConstruccio,
  B1: llarInfants,
};

// All available backgrounds for the gallery rotation
export const allBackgroundImages = [
  tribuPaleolitica,
  arbreCaigut,
  incendiForestal,
  personaArmada,
  obraConstruccio,
  llarInfants,
];
