### L'arbre caigut – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 20 personajes de un pueblo rural catalán para el escenario A2 "L'arbre caigut".

---

## 1. Contexto y tono general

- **Época**: Actualidad, pueblo rural de interior de Catalunya (Pirineu, Prepirineu o comarca d'interior).
- **Situación**: Una tempesta ha fet caure un arbre gran que bloqueja l'únic camí d'accés al poble. Cal tallar-lo amb destrals i retirar els troncs. Necessitem 5 persones.
- **Entorno**: Comunidad pequeña (200–500 habitantes) donde se conocen todos, mezcla de oficios tradicionales y gente que ha venido a vivir al pueblo más recientemente.
- **Tono**:
  - Realista, no caricaturesco.
  - Diversidad creíble de edades, complexiones, oficios y orígenes.
  - Personas representadas con dignidad y sin estereotipos visuales exagerados.
- **Colores y materiales**:
  - Ropa de trabajo rural: tejanos, botas, chaquetas de campo, jerséis de lana, gorras.
  - Paleta natural pero algo más variada que el Paleolítico: azules de trabajo, verdes, marrones, grises, algún rojo o naranja apagado.
  - Sin colores neón ni ropa llamativa de moda urbana.

---

## 2. Estilo gráfico común (Pixel Art)

- **Formato base**:
  - Sprites de **128×128 px**.
  - Personajes en **vista frontal o ligeramente de 3/4**, de cuerpo entero.
  - Personaje centrado y sin recortes (game-ready sprite).
- **Estética**:
  - **Pixel art clásico** de videojuego.
  - Paleta de colores **limitada**, sin degradados suaves.
  - **Bordes limpios**, sin anti-aliasing.
  - Entre **3 y 5 tonos por color** (piel, pelo, ropa).
  - Sombras simples, luz ligeramente desde arriba.
- **Fondo**:
  - Fondo liso o muy mínimo (un solo color o un degradado muy sutil).
  - Nada de escenarios; el foco es el personaje.

---

## 3. Prompt maestro para FLUX 2

Usar este prompt como base para todos los personajes, ajustando únicamente la parte de descripción específica de cada uno (edad, género, complexión, oficio, ropa, etc.).

```text
Pixel art character of a rural Catalan villager, full body, standing pose, facing slightly toward the camera, neutral and calm expression.

[PERSONAL DESCRIPTION HERE]

Contemporary rural person from a small mountain or inland village in Catalonia: realistic body proportions (not chibi, not exaggerated), natural skin tones, practical hairstyles.

Clothing and equipment based on rural working life: work jeans or trousers, sturdy boots or work shoes, practical jackets or vests, wool sweaters, work gloves, caps or hats. Optional items: tools (axe, saw, rope), work apron, backpack, walking stick.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Practical rural tones (blues, browns, greens, grays, muted reds, khaki).

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
