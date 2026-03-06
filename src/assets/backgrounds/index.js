import tribuPaleolitica from './tribu-paleolitica.png';
import arbreCaigut from './arbre-caigut.png';
import incendiForestal from './incendi-forestal.png';
import personaArmada from './persona-armada.png';
import obraConstruccio from './obra-construccio.png';
import llarInfants from './llar-infants.png';
import cuidarPersonaGran from './cuidar-persona-gran.png';
import nenPloraParc from './nen-plora-parc.png';

// Map scenario ID → background image URL (resolved by Vite)
export const scenarioBackgrounds = {
  P1: tribuPaleolitica,
  A2: arbreCaigut,
  A3: incendiForestal,
  A4: personaArmada,
  A5: obraConstruccio,
  B1: llarInfants,
  B2: cuidarPersonaGran,
  B3: nenPloraParc,
};

// All available backgrounds for the gallery rotation
export const allBackgroundImages = [
  tribuPaleolitica,
  arbreCaigut,
  incendiForestal,
  personaArmada,
  obraConstruccio,
  llarInfants,
  cuidarPersonaGran,
  nenPloraParc,
];
