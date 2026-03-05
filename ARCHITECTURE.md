# Arquitectura — A qui tries?

## Decisions tècniques

### Stack
- **React 19 + Vite 7**: SPA lleugera, ràpida de carregar, ideal per a ús a l'aula
- **CSS pur**: Sense frameworks CSS. BEM naming per organització. Mobile-first responsive
- **Dades JSON estàtiques**: Sense backend. Tot el contingut viu a `src/data/scenarios.json`
- **GitHub Pages**: Deploy estàtic via `gh-pages`

### Estructura

```
src/
├── components/       # Components React (UI)
│   ├── App.jsx              # Router d'estat (start → scenario → end)
│   ├── StartScreen.jsx      # Pantalla d'inici
│   ├── ScenarioScreen.jsx   # Pantalla principal d'escenari
│   ├── CharacterCard.jsx    # Targeta de personatge (seleccionable)
│   ├── CharacterTooltip.jsx # Popup amb informació detallada
│   ├── SelectionCounter.jsx # Comptador visual de selecció
│   ├── ReflectionModal.jsx  # Modal post-tria amb reflexió
│   ├── EndScreen.jsx        # Resum estadístic final
│   ├── SkillBar.jsx         # Barra d'habilitat estil RPG
│   ├── Avatar.jsx           # Avatar amb fallback (imatge → SVG)
│   └── GeneratedAvatar.jsx  # SVG generat per codi
├── data/
│   └── scenarios.json       # Totes les dades d'escenaris i personatges
├── hooks/
│   └── useScenarioManager.js # Lògica central: aleatorització, navegació, estat
├── styles/
│   ├── global.css           # Reset, variables, start/end screens
│   ├── characters.css       # Targetes, tooltips, skill bars
│   ├── scenario.css         # Grid d'escenari, comptador
│   └── modal.css            # Modal de reflexió
├── utils/
│   └── shuffle.js           # Fisher-Yates shuffle
└── main.jsx                 # Entry point
```

### Flux de l'aplicació

```
StartScreen → ScenarioScreen (×4, aleatoritzats) → EndScreen
                    ↓
              ReflectionModal (després de cada tria)
```

### Aleatorització
- Fisher-Yates shuffle per a l'ordre dels escenaris i dels personatges dins cada escenari
- Es recalcula cada vegada que es reinicia

### Interacció tàctil vs. ratolí
- **Desktop**: Hover mostra tooltip, clic selecciona/deselecciona
- **Mòbil**: 1r tap mostra tooltip, 2n tap selecciona

### Avatars substituïbles
- `Avatar.jsx` intenta carregar `public/avatars/{id}.png`
- Si falla (onError), renderitza `GeneratedAvatar.jsx` (SVG generat per codi)
- Permet substituir avatars progressivament sense canviar codi
