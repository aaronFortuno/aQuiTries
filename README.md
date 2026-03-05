# A qui tries?

Aplicació web educativa interactiva per treballar la **igualtat de gènere** amb alumnat de 6è de primària.

Presenta escenaris on l'alumnat ha de triar persones per a tasques concretes, provocant reflexió sobre biaixos i prejudicis vs. raons objectives.

## Demo

**[aaronfortuno.github.io/aQuiTries](https://aaronfortuno.github.io/aQuiTries)**

## Com funciona

1. L'alumnat veu un escenari amb un context (ex: "Caçar un mamut", "Treballar a la llar d'infants")
2. Es presenten 12-15 personatges amb habilitats, trets i característiques
3. L'alumnat tria un nombre concret de persones per a la tasca
4. Després de cada tria, es mostra una reflexió amb preguntes per al debat
5. Al final, es fa un resum estadístic de les tries (homes vs dones)

## Escenaris MVP

| ID | Títol | Categoria | Persones a triar |
|----|-------|-----------|------------------|
| A1 | La cacera del mamut | Força física | 4 |
| B1 | La llar d'infants | Cura i empatia | 3 |
| C1 | L'operació de cor | Mixt/ambigú | 3 |
| D3 | Les oposicions a bomber | Quotes i paritat | 5 |

## Desenvolupament

```bash
# Instal·lar dependències
npm install

# Servidor de desenvolupament
npm run dev

# Build de producció
npm run build

# Preview del build
npm run preview

# Deploy a GitHub Pages
npm run deploy
```

## Stack

- React 19 + Vite 7
- CSS (sense frameworks)
- Dades JSON estàtiques (sense backend)
- Deploy: GitHub Pages

## Avatars

Els avatars es poden substituir col·locant imatges a `public/avatars/{id}.png` (ex: `A1-01.png`). Si no existeix la imatge, es mostra un avatar SVG generat automàticament.

## Llicència

MIT
