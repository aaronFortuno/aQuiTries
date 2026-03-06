### L'operació de cor – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 13 personajes (cirurgians cardíacs) per a l'escenari C1 "L'operació de cor".

---

## 1. Contexto y tono general

- **Época**: Actualidad, hospital de referència a Catalunya (Hospital Clínic, Vall d'Hebron, Bellvitge o similar).
- **Situación**: Un pacient de 58 anys necessita una operació a cor obert per reemplaçar una vàlvula aòrtica danyada. La intervenció durarà unes 10 hores. Cal triar un equip de 3 cirurgians.
- **Entorno**: Hospital públic modern, departament de cirurgia cardíaca. Personal mèdic d'alta qualificació amb diversitat d'edats, orígens i trajectòries.
- **Tono**:
  - Realista, professional, no caricaturesc.
  - Context hospitalari: tots els personatges porten uniformitat mèdica (pijames quirúrgics, bates, etc.) però amb variacions individuals que els diferencien.
  - Diversitat creïble d'edats (31-63 anys), gènere (7 homes, 6 dones), orígens i perfils professionals.
  - L'escenari vol mostrar que en cirurgia el sexe és completament irrellevant — importa l'experiència, la precisió i la resistència mental.
- **Colores y materiales**:
  - Dominant: blau quirúrgic (scrubs) en diverses tonalitats.
  - Secundaris: blanc de bata, verd quiròfan, gris d'accessoris.
  - Cada personatge es diferencia per: edat visible al rostre, complexió, cabell, complements (ulleres, rellotge, estetoscopi, tauleta digital, cafè).
  - Paleta neta, professional, sense colors cridaners.

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
  - Fons llis o molt mínim (un sol color o un degradat molt subtil).
  - Res d'escenaris; el foc és el personatge.

---

## 3. Prompt maestro para FLUX 2

```text
Pixel art character of a cardiac surgeon in a modern hospital setting, full body, standing pose, facing slightly toward the camera, professional and focused expression.

[PERSONAL DESCRIPTION HERE]

Contemporary medical professional in a modern Catalan hospital: realistic body proportions (not chibi, not exaggerated), natural skin tones, practical hairstyles appropriate for surgery.

Clothing: surgical scrubs (blue, teal, or green variations), optional white lab coat, comfortable closed shoes or surgical clogs. Optional items: surgical cap, stethoscope, tablet/clipboard, surgical loupes, coffee cup, ID badge on lanyard.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Clean medical tones: surgical blues, whites, teals, muted professional colors.

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
