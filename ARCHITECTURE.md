# Arquitectura — A qui tries?

## Decisions tècniques

### Stack
- **React 19 + Vite 7**: SPA lleugera, ràpida de carregar, ideal per a ús a l'aula
- **Firebase Firestore**: Connexió en temps real per al mode guiat (professor + alumnes)
- **CSS pur**: Sense frameworks CSS. BEM naming per organització. Mobile-first responsive
- **Dades JSON estàtiques**: Tot el contingut viu a `src/data/scenarios.json` (CA) i `src/data/scenarios_es.json` (ES)
- **GitHub Pages**: Deploy estàtic via `gh-pages`

### Estructura

```
src/
├── components/              # Components React (UI)
│   ├── App.jsx              # Router d'estat (start → scenario → end / guided)
│   ├── StartScreen.jsx      # Pantalla d'inici + historial de versions
│   ├── ScenarioScreen.jsx   # Pantalla principal d'escenari
│   ├── SceneBackground.jsx  # Fons dinàmic per escenari amb transició
│   ├── CharacterCard.jsx    # Targeta de personatge (seleccionable)
│   ├── CharacterTooltip.jsx # Popup amb informació detallada
│   ├── SelectionCounter.jsx # Comptador visual de selecció
│   ├── ReflectionModal.jsx  # Modal post-tria amb reflexió
│   ├── EndScreen.jsx        # Resum estadístic final
│   ├── SkillBar.jsx         # Barra d'habilitat estil RPG
│   ├── Avatar.jsx           # Avatar amb fallback (WebP → PNG → SVG)
│   ├── GeneratedAvatar.jsx  # SVG generat per codi
│   └── guided/              # Components del mode professor
│       ├── TeacherLobby.jsx         # Crear sala, veure codi i alumnes connectats
│       ├── TeacherRoundView.jsx     # Control d'avanç d'escenaris
│       ├── TeacherResultsView.jsx   # Resultats agregats per gènere
│       ├── StudentJoin.jsx          # Unir-se a sala amb codi 4 dígits
│       ├── StudentWaiting.jsx       # Espera entre rondes
│       ├── StudentScenarioWrapper.jsx # Escenari dins del mode guiat
│       └── StudentResultsView.jsx   # Resultats de l'alumne
├── data/
│   ├── scenarios.json       # Escenaris i personatges (català)
│   └── scenarios_es.json    # Escenaris i personatges (castellà)
├── firebase/
│   ├── config.js            # Configuració Firebase (credencials via env vars)
│   └── roomService.js       # CRUD de sales: crear, unir-se, avançar, resultats
├── hooks/
│   ├── useScenarioManager.js # Lògica central: aleatorització, navegació, estat
│   └── useGuidedRoom.js      # Gestió de sala en temps real (Firestore listeners)
├── i18n/
│   ├── index.jsx            # Provider i hook useTranslation
│   ├── ca.js                # Traduccions català
│   └── es.js                # Traduccions castellà
├── styles/
│   ├── global.css           # Reset, variables, start/end screens
│   ├── characters.css       # Targetes, tooltips, skill bars
│   ├── scenario.css         # Grid d'escenari, comptador
│   ├── modal.css            # Modal de reflexió
│   ├── background.css       # Fons d'escenari amb transició
│   └── guided.css           # Estils del mode guiat
├── utils/
│   ├── shuffle.js           # Fisher-Yates shuffle
│   └── getScenarios.js      # Carrega escenaris segons idioma
├── assets/
│   └── backgrounds/         # Fons d'escenari en WebP
│       └── index.js         # Map scenario ID → imatge importada
└── main.jsx                 # Entry point

public/
└── avatars/                 # Sprites de personatges (WebP, 128×128)
```

### Flux de l'aplicació

#### Mode individual
```
StartScreen → ScenarioScreen (×4, aleatoritzats) → EndScreen
                    ↓
              ReflectionModal (després de cada tria)
```

#### Mode guiat (professor)
```
StartScreen
  ├── Professor: TeacherLobby → TeacherRoundView (×N) → TeacherResultsView
  └── Alumne:    StudentJoin → StudentWaiting ↔ StudentScenarioWrapper → StudentResultsView
```

El professor crea una sala amb un codi de 4 dígits. Els alumnes s'hi connecten amb el codi. El professor controla l'avanç: quan avança a un nou escenari, tots els alumnes el reben simultàniament. Els resultats s'agreguen en temps real per gènere amb gràfics de barres.

Les sales són efímeres amb expiració automàtica (8 hores).

### Aleatorització
- Fisher-Yates shuffle per a l'ordre dels escenaris i dels personatges dins cada escenari
- Es recalcula cada vegada que es reinicia

### Interacció tàctil vs. ratolí
- **Desktop**: Hover mostra tooltip, clic selecciona/deselecciona
- **Mòbil**: 1r tap mostra tooltip, 2n tap selecciona

### Avatars substituïbles
- `Avatar.jsx` intenta carregar `public/avatars/{id}.webp`
- Si falla, prova `.png`
- Si falla, renderitza `GeneratedAvatar.jsx` (SVG generat per codi)
- Permet substituir avatars progressivament sense canviar codi

### Internacionalització (i18n)
- `I18nProvider` a `src/i18n/index.jsx` amb context React
- Hook `useTranslation()` retorna `{ t, locale, setLocale }`
- Traduccions a `ca.js` i `es.js` (UI + noms d'habilitats)
- Escenaris i personatges en fitxers JSON separats per idioma
