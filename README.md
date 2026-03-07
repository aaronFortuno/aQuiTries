# A qui tries?

Activitat interactiva per treballar la igualtat de gènere, els biaixos inconscients i el pensament crític amb alumnat de 6è de primària. Es presenten situacions reals on cal triar persones per a una tasca — l'objectiu no és encertar, sinó reflexionar sobre per què tries qui tries.

El joc inclou 24 escenaris organitzats en 5 categories (força física, cura i empatia, escenaris mixtos, quotes i paritat, escenaris trampa), cadascun amb 12-20 personatges amb habilitats i perfils diversos. Després de cada tria, un modal de reflexió convida al debat a l'aula.

## Demo

**[aaronfortuno.github.io/aQuiTries](https://aaronfortuno.github.io/aQuiTries)**

## Funcionalitats

- **Joc individual**: 4 escenaris aleatoris amb reflexió post-tria i resum estadístic final
- **Mode guiat (professor)**: El docent crea una sala amb codi de 4 dígits, els alumnes s'hi connecten, el professor controla l'avanç dels escenaris i veu resultats agregats per gènere
- **Idiomes**: Català (CA) i Castellà (ES)
- **Avatars pixel art**: Sprites 128×128 generats amb FLUX 2, amb fallback SVG
- **Fons dinàmics**: Cada escenari té un fons pixel art panoràmic

## Stack tecnològic

- **React 19** + **Vite 7** — SPA lleugera
- **Firebase Firestore** — Mode guiat en temps real (professor + alumnes)
- **CSS pur** (BEM) — Mobile-first, sense frameworks CSS
- **GitHub Pages** — Deploy estàtic via `gh-pages`

## Estructura de carpetes

```
src/
├── components/           # Components React (UI)
│   ├── App.jsx           # Router d'estat principal
│   ├── StartScreen.jsx   # Pantalla d'inici + historial de versions
│   ├── ScenarioScreen.jsx
│   ├── SceneBackground.jsx
│   ├── Avatar.jsx        # Avatar amb fallback (WebP → PNG → SVG)
│   └── guided/           # 7 components del mode professor
├── data/
│   ├── scenarios.json    # Escenaris en català
│   └── scenarios_es.json # Escenaris en castellà
├── firebase/             # Configuració i serveis Firebase
├── hooks/                # useScenarioManager, useGuidedRoom
├── i18n/                 # Traduccions CA/ES
├── styles/               # CSS (global, scenario, characters, modal, guided, background)
├── utils/                # shuffle, getScenarios
└── assets/backgrounds/   # Fons d'escenari (WebP)

public/avatars/           # Sprites de personatges (WebP)
characters/               # Character bibles, fitxes i prompts FLUX 2
```

## Desenvolupament local

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

Desplegament automàtic a GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

## Historial de versions

### v0.4.2 (2026-03-07)
- 14 noves situacions: categories C3-C9, D1-D5 i E1-E2
- Corregit: canviar d'idioma ja no canvia l'escenari actual

### v0.4.1 (2026-03-07)
- Noves situacions: C1 (operació de cor), C2 (exploració de la cova)
- Suport d'imatges WebP per als avatars

### v0.4 (2026-03-06)
- Mode guiat: el docent crea una sala i els alumnes s'hi connecten amb un codi de 4 dígits
- Connexió en temps real amb Firebase Firestore
- Resultats agregats per gènere amb gràfic de barres

### v0.3.1 (2026-03-06)
- Nous escenaris: "Cuidar una persona gran", "El nen que plora al parc"

### v0.3 (2026-03-06)
- Nous escenaris: "L'obra de construcció", "La llar d'infants"
- Layout compacte, context col·lapsable

### v0.2 (2026-03-06)
- Nous escenaris: "L'arbre caigut", "L'incendi forestal", "La persona armada"
- Sistema i18n, fons dinàmics, galeria amb scroll horitzontal

### v0.1 (2026-03-01)
- Versió inicial amb escenari "La cacera del mamut"

## Llicència

MIT
