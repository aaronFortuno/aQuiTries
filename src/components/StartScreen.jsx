import { useState } from 'react';
import { useTranslation } from '../i18n';
import '../styles/global.css';
import '../styles/guided.css';

const VERSION_HISTORY = [
  {
    version: '0.5.1',
    date: '2026-03-07',
    changes: {
      ca: [
        'Modal de reflexió redissenyat: galeria visual de personatges triats amb avatar i barres d\'habilitat',
        'Descripció del personatge accessible amb hover/tap, no visible per defecte',
      ],
      es: [
        'Modal de reflexión rediseñado: galería visual de personajes elegidos con avatar y barras de habilidad',
        'Descripción del personaje accesible con hover/tap, no visible por defecto',
      ],
    },
  },
  {
    version: '0.5',
    date: '2026-03-07',
    changes: {
      ca: [
        'Corregides 4 situacions (E1, E2, C7, C8) que no mostraven la descripció ni la categoria correctament',
        'Introducció pedagògica accessible des de la pantalla d\'inici',
        'Reorganització d\'arquitectura: eliminades imatges duplicades, conversió a WebP',
      ],
      es: [
        'Corregidas 4 situaciones (E1, E2, C7, C8) que no mostraban la descripción ni la categoría correctamente',
        'Introducción pedagógica accesible desde la pantalla de inicio',
        'Reorganización de arquitectura: eliminadas imágenes duplicadas, conversión a WebP',
      ],
    },
  },
  {
    version: '0.4.2',
    date: '2026-03-07',
    changes: {
      ca: [
        '14 noves situacions: categories C3-C9, D1-D5 i E1-E2',
        'Corregit: canviar d\'idioma ja no canvia l\'escenari actual',
      ],
      es: [
        '14 nuevas situaciones: categorías C3-C9, D1-D5 y E1-E2',
        'Corregido: cambiar de idioma ya no cambia el escenario actual',
      ],
    },
  },
  {
    version: '0.4.1',
    date: '2026-03-07',
    changes: {
      ca: [
        'Nova situació: C1 – L\'operació de cor (13 cirurgians cardíacs)',
        'Nova situació: C2 – L\'exploració de la cova (14 espeleòlegs)',
        'Suport d\'imatges WebP per als avatars dels personatges',
        'Corregit el botó ln-tip-jar que tapava el modal de detall en mòbil',
      ],
      es: [
        'Nueva situación: C1 – La operación de corazón (13 cirujanos cardíacos)',
        'Nueva situación: C2 – La exploración de la cueva (14 espeleólogos)',
        'Soporte de imágenes WebP para los avatares de personajes',
        'Corregido el botón ln-tip-jar que tapaba el modal de detalle en móvil',
      ],
    },
  },
  {
    version: '0.4',
    date: '2026-03-06',
    changes: {
      ca: [
        'Mode guiat: el docent crea una sala i els alumnes s\'hi connecten amb un codi de 4 dígits',
        'Connexió en temps real amb Firebase Firestore',
        'Resultats agregats per gènere amb gràfic de barres',
        'Sales efímeres amb expiració automàtica (8 hores)',
        'Corregit el problema de càrrega de fons d\'escenari',
      ],
      es: [
        'Modo guiado: el docente crea una sala y los alumnos se conectan con un código de 4 dígitos',
        'Conexión en tiempo real con Firebase Firestore',
        'Resultados agregados por género con gráfico de barras',
        'Salas efímeras con expiración automática (8 horas)',
        'Corregido el problema de carga de fondos de escenario',
      ],
    },
  },
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

export default function StartScreen({ onStartIndividual, onCreateRoom, onJoinRoom }) {
  const { t, locale } = useTranslation();
  const [showVersions, setShowVersions] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

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
        <button
          className="start-screen__about-btn"
          onClick={() => setShowAbout(true)}
        >
          {t('ui.aboutButton')}
        </button>
        <div className="start-screen__modes">
          <button
            className="start-screen__mode-btn start-screen__mode-btn--individual"
            onClick={onStartIndividual}
          >
            {t('ui.modeIndividual')}
          </button>
          <button
            className="start-screen__mode-btn start-screen__mode-btn--create"
            onClick={onCreateRoom}
          >
            {t('ui.createRoom')}
          </button>
          <button
            className="start-screen__mode-btn start-screen__mode-btn--join"
            onClick={onJoinRoom}
          >
            {t('ui.joinRoom')}
          </button>
        </div>
      </div>

      <button
        className="start-screen__version-btn"
        onClick={() => setShowVersions(v => !v)}
      >
        v{VERSION_HISTORY[0].version}
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

      {showAbout && (
        <>
          <div
            className="start-screen__about-backdrop"
            onClick={() => setShowAbout(false)}
          />
          <div className="start-screen__about-modal">
            <button
              className="start-screen__about-close"
              onClick={() => setShowAbout(false)}
            >
              {t('ui.close')}
            </button>
            <h2 className="start-screen__about-title">{t('ui.aboutTitle')}</h2>
            <div className="start-screen__about-content">
              <p>{t('ui.aboutIntro')}</p>
              <h3>{t('ui.aboutHowTitle')}</h3>
              <p>{t('ui.aboutHow')}</p>
              <h3>{t('ui.aboutWhyTitle')}</h3>
              <p>{t('ui.aboutWhy1')}</p>
              <p>{t('ui.aboutWhy2')}</p>
              <h3>{t('ui.aboutAudienceTitle')}</h3>
              <p>{t('ui.aboutAudience')}</p>
              <h3>{t('ui.aboutKeyIdeasTitle')}</h3>
              <ul>
                <li>{t('ui.aboutKeyIdea1')}</li>
                <li>{t('ui.aboutKeyIdea2')}</li>
                <li>{t('ui.aboutKeyIdea3')}</li>
                <li>{t('ui.aboutKeyIdea4')}</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
