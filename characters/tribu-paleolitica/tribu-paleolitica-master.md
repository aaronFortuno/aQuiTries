### Paleolithic Tribe – Pixel Art Character Bible

Este documento recoge el contexto histórico y estilístico común, el “prompt maestro” para FLUX 2 y la descripción detallada de 15 personajes distintos de una tribu paleolítica.  
La idea es que te sirva tanto para guiar la generación de sprites como para usar las fichas de personaje dentro de tu aplicación.

---

## 1. Contexto histórico y tono general

- **Época aproximada**: Paleolítico superior, grupos de cazadores-recolectores nómadas o seminómadas.
- **Región genérica**: Eurasia templada (bosques, estepas, zonas de ribera), sin concretar una cultura arqueológica exacta, pero inspirada en evidencias de:
  - Herramientas de piedra tallada.
  - Uso de pieles y cueros como ropa.
  - Abalorios de hueso, concha y piedra.
- **Tono**:
  - Nada caricaturesco ni infantilizado.
  - Personas adultas, ancianos y niños representados con dignidad.
  - Aspecto duro y resistente, pero no “heroico de cómic”.
- **Colores y materiales**:
  - Paleta de colores naturales: ocres, marrones, grises, verdosos apagados, hueso blanco, negro carbón.
  - Ropas de cuero, piel y lana; ocasionalmente fibras vegetales.
  - Armas simples: lanzas de madera con punta de piedra, garrotes, cuchillos de sílex.

---

## 2. Estilo gráfico común (Pixel Art)

- **Formato base**:
  - Sprites de **128×128 px** (o equivalentes escalados).
  - Personajes en **vista frontal o ligeramente de 3/4**, de cuerpo entero.
  - Personaje centrado y sin recortes (game‑ready sprite).
- **Estética**:
  - **Pixel art clásico** de videojuego.
  - Paleta de colores **limitada**, sin degradados suaves.
  - **Bordes limpios**, sin anti‑aliasing.
  - Entre **3 y 5 tonos por color** (piel, pelo, ropa).
  - Sombras simples, luz ligeramente desde arriba.
- **Fondo**:
  - Fondo liso o muy mínimo (un solo color o un degradado muy sutil).
  - Nada de escenarios; el foco es el personaje.

---

## 3. Prompt maestro para FLUX 2

Usar este prompt como base para todos los personajes, ajustando únicamente la parte de descripción específica de cada uno (edad, género, complexión, rol, etc.).  

```text
Pixel art character of a Paleolithic human from a hunter-gatherer tribe, full body, standing pose, facing slightly toward the camera, neutral and calm expression.

[PERSONAL DESCRIPTION HERE]

Adult or child from the Upper Paleolithic, historically grounded and not cartoonish: realistic body proportions (not chibi, not exaggerated muscles), slightly weathered skin, simple unstyled hair.

Clothing and equipment based on archaeological evidence: short fur tunic or wrap made from animal hide, simple leather belt or cord, bare legs or simple fur leggings, primitive sandals or bare feet. Optional items: bone or shell necklace, small leather pouch at the waist, simple wooden spear with stone tip, small stone knife, or walking stick.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Historical rigor: avoid fantasy elements, no modern weapons, no modern hairstyles, no bright synthetic colors. Natural tones only (browns, ochres, grays, muted reds, bone white).

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.