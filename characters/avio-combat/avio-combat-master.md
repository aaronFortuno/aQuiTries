### Pilotar un avió de combat – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 12 personajes (pilots militars) per a l'escenari C3 "Pilotar un avió de combat".

---

## 1. Contexto y tono general

- **Época**: Actualitat, base aèria militar a Catalunya o Espanya.
- **Situación**: Cal seleccionar 2 pilots per a una missió de combat aeri. Es requereix capacitat de reacció ràpida, resistència a forces G i presa de decisions sota pressió. L'alumnat ha de triar entre 12 pilots militars amb perfils molt diversos.
- **Entorno**: Base aèria amb hangars i pistes. Els personatges són pilots de combat amb diferents nivells d'experiència, condició física i resultats en simuladors.
- **Tono**:
  - Realista, professional, no caricaturesc.
  - Context militar aeri: els personatges porten equipament de pilot (granotes de vol, cascos, armilles anti-G) però amb variacions individuals.
  - Diversitat creïble d'edats (25-45 anys), gènere (6 homes, 6 dones), complexions i perfils.
  - **Escenari trampa**: La força física és irrellevant per pilotar un avió de combat. Les dones amb menys massa corporal poden tolerar millor certes maniobres de forces G (el cor ha de bombejar menys sang). La tria "òbvia" (homes) pot ser equivocada.
- **Colores y materiales**:
  - Dominant: tons militars — verd oliva, gris fosc, blau marí, taronja de seguretat en cascos.
  - Secundaris: negre d'equipament, blanc de pegats i insígnies.
  - Cada personatge es diferencia per: complexió (des de petit/a i lleuger/a a corpulent/a), edat, cabell, accessoris específics (ulleres de sol, guants, auriculars).
  - Paleta militar amb accents de seguretat (taronja, groc en cascos i armilles).

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
  - Res d'escenaris; el focus és el personatge.

---

## 3. Prompt maestro para FLUX 2

```text
Pixel art character of a military fighter pilot at an air base, full body, standing pose, facing slightly toward the camera, confident and focused expression.

[PERSONAL DESCRIPTION HERE]

Contemporary military fighter pilot at a modern air base: realistic body proportions (not chibi, not exaggerated), natural skin tones, practical hairstyles appropriate for wearing a flight helmet.

Clothing: flight suits in olive green or dark gray, anti-G suits or vests, flight helmets with visors, pilot gloves. Optional items: oxygen mask hanging to one side, aviator sunglasses, kneeboard strapped to thigh, flight helmet under arm or on head, squadron patches on shoulders, name tag on chest.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Military tones: olive greens, dark grays, navy blues, muted professional colors with safety accents (orange, yellow).

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
