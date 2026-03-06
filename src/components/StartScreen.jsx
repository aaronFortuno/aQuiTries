import { useState } from 'react';
import { useTranslation } from '../i18n';
import '../styles/global.css';

const VERSION_HISTORY = [
  {
    version: '0.3.1',
    date: '2026-03-06',
    changes: {
      ca: [
        'Nou escenari: "Cuidar una persona gran" amb 16 candidats i selecció de 1',
        'Nou escenari: "El nen que plora al parc" amb 15 candidats i selecció de 1',
      ],
      es: [
        'Nuevo escenario: "Cuidar a una persona mayor" con 16 candidatos y selección de 1',
        'Nuevo escenario: "El niño que llora en el parque" con 15 candidatos y selección de 1',
      ],
    },
  },
  {
    version: '0.3',
    date: '2026-03-06',
    changes: {
      ca: [
        'Nou escenari: "L\'obra de construcció" amb 16 personatges',
        'Nou escenari: "La llar d\'infants" amb 17 candidats i selecció de 3',
        'Layout compacte de la pantalla d\'escenari (tot visible sense scroll)',
        'Context de la situació col·lapsable',
        'Nous fons al carrusel inicial (obra de construcció, llar d\'infants)',
      ],
      es: [
        'Nuevo escenario: "La obra de construcción" con 16 personajes',
        'Nuevo escenario: "La guardería" con 17 candidatos y selección de 3',
        'Layout compacto de la pantalla de escenario (todo visible sin scroll)',
        'Contexto de la situación colapsable',
        'Nuevos fondos en el carrusel inicial (obra de construcción, guardería)',
      ],
    },
  },
  {
    version: '0.2',
    date: '2026-03-06',
    changes: {
      ca: [
        'Nou escenari: "L\'arbre caigut" amb 20 personatges',
        'Nou escenari: "L\'incendi forestal" amb 18 personatges i doble tasca',
        'Nou escenari: "La persona armada" amb 12 professionals i selecció de 2',
        'Selecció aleatòria d\'escenaris',
        'Botons per saltar situació i finalitzar sessió',
        'Fons dinàmics per escenari amb transició suau',
        'Sistema i18n complet (català/castellà)',
        'Galeria de personatges amb scroll horitzontal',
        'Fitxa de personatge ampliada amb modal',
      ],
      es: [
        'Nuevo escenario: "El árbol caído" con 20 personajes',
        'Nuevo escenario: "El incendio forestal" con 18 personajes y doble tarea',
        'Nuevo escenario: "La persona armada" con 12 profesionales y selección de 2',
        'Selección aleatoria de escenarios',
        'Botones para saltar situación y finalizar sesión',
        'Fondos dinámicos por escenario con transición suave',
        'Sistema i18n completo (catalán/castellano)',
        'Galería de personajes con scroll horizontal',
        'Ficha de personaje ampliada con modal',
      ],
    },
  },
  {
    version: '0.1',
    date: '2026-03-01',
    changes: {
      ca: [
        'Versió inicial amb escenari "La cacera del mamut"',
        'Interfície bàsica de selecció de personatges',
        'Pantalla de reflexió i resum',
      ],
      es: [
        'Versión inicial con escenario "La caza del mamut"',
        'Interfaz básica de selección de personajes',
        'Pantalla de reflexión y resumen',
      ],
    },
  },
];

export default function StartScreen({ onStart }) {
  const { t, locale } = useTranslation();
  const [showVersions, setShowVersions] = useState(false);

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

      <button
        className="start-screen__version-btn"
        onClick={() => setShowVersions(v => !v)}
      >
        {t('ui.versionHistory')}
      </button>

      {showVersions && (
        <>
          <div
            className="start-screen__versions-backdrop"
            onClick={() => setShowVersions(false)}
          />
          <div className="start-screen__versions">
            {VERSION_HISTORY.map(v => (
              <div key={v.version} className="start-screen__version-entry">
                <h3>{t('ui.version')} {v.version} <span className="start-screen__version-date">({v.date})</span></h3>
                <ul>
                  {(v.changes[locale] || v.changes.ca).map((change, i) => (
                    <li key={i}>{change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
