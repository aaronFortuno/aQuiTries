import tribuPaleolitica from './tribu-paleolitica.png';
import arbreCaigut from './arbre-caigut.png';
import incendiForestal from './incendi-forestal.png';
import personaArmada from './persona-armada.png';

// Map scenario ID → background image URL (resolved by Vite)
export const scenarioBackgrounds = {
  P1: tribuPaleolitica,
  A2: arbreCaigut,
};

// All available backgrounds for the gallery rotation
export const allBackgroundImages = [
  tribuPaleolitica,
  arbreCaigut,
  incendiForestal,
  personaArmada,
];
