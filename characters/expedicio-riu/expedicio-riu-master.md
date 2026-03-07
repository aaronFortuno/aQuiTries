### L'expedició al riu – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 16 personajes (membres d'una tribu paleolítica) per a l'escenari C5 "L'expedició al riu".

---

## 1. Contexto y tono general

- **Época**: Paleolític superior, grups de caçadors-recol·lectors nòmades o seminòmades.
- **Situación**: Fa dies que no plou. Les reserves d'aigua de la tribu s'estan esgotant. Cal que 3 persones caminin 20 km fins al riu més proper per portar aigua. Caldrà resistència per caminar tot el dia, orientació per trobar el camí i força per portar pes de tornada (odres d'aigua de pell). Cal triar 3 persones entre els 16 membres disponibles de la tribu.
- **Entorno**: Estepa semiàrida amb turons baixos i vegetació dispersa. El riu és a un dia de camí, per un terreny que la tribu coneix però que no tots han recorregut.
- **Tono**:
  - Realista, amb dignitat, no caricaturesc ni infantilitzat.
  - Persones de totes les edats: des de nens molt petits fins a ancians.
  - Aspecte dur i resistent, però no heroic de còmic.
  - L'escenari vol mostrar que la tasca de portar aigua no és "òbvia": en moltes cultures africanes actuals, són les dones qui fan aquesta tasca. La "obvietat" de triar homes forts desapareix quan es consideren la resistència, l'orientació i el coneixement del terreny. Estem triant per biologia o per cultura?
- **Colores y materiales**:
  - Paleta de colors naturals: ocres, marrons, grisos, verdosos apagats, blanc os, negre carbó.
  - Robes de cuir, pell i llana; ocasionalment fibres vegetals.
  - Equipament simple: odres de pell, bastons, cordills de cuir, contenidors rudimentaris.

---

## 2. Estilo gráfico común (Pixel Art)

- **Formato base**:
  - Sprites de **128×128 px**.
  - Personatges en **vista frontal o lleugerament de 3/4**, de cos sencer.
  - Personatge centrat i sense retalls (game-ready sprite).
- **Estética**:
  - **Pixel art clàssic** de videojoc.
  - Paleta de colors **limitada**, sense degradats suaus.
  - **Vores netes**, sense anti-aliasing.
  - Entre **3 i 5 tons per color** (pell, cabell, roba).
  - Ombres simples, llum lleugerament des de dalt.
- **Fondo**:
  - Fons llis o molt mínim (un sol color).
  - Res d'escenaris; el focus és el personatge.

---

## 3. Prompt maestro para FLUX 2

```text
Pixel art character of a Paleolithic human from a hunter-gatherer tribe, full body, standing pose, facing slightly toward the camera, neutral and calm expression.

[PERSONAL DESCRIPTION HERE]

Adult, child or elder from the Upper Paleolithic, historically grounded and not cartoonish: realistic body proportions (not chibi, not exaggerated muscles), slightly weathered skin, simple unstyled hair.

Clothing and equipment based on archaeological evidence: short fur tunic or wrap made from animal hide, simple leather belt or cord, bare legs or simple fur leggings, primitive sandals or bare feet. Optional items: animal-skin water bag, bone or shell necklace, small leather pouch at the waist, simple walking stick, carrying frame made of sticks and leather straps.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Historical rigor: avoid fantasy elements, no modern weapons, no modern hairstyles, no bright synthetic colors. Natural tones only (browns, ochres, grays, muted reds, bone white).

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
