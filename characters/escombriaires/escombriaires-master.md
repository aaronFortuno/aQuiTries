### L'equip d'escombriaires – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 16 personajes (candidats a escombriaire) per a l'escenari C7 "L'equip d'escombriaires".

---

## 1. Contexto y tono general

- **Época**: Actualitat, Espanya rural, Castella-La Manxa.
- **Situación**: L'Ajuntament de Valdecampos (poble fictici, ~800 habitants) convoca 4 places d'escombriaire. Sou mínim, contracte temporal de 12 mesos. No cal formació específica. S'hi presenten 16 persones de perfils molt diversos: locals que han perdut la feina per tancament industrial, dones que mai han treballat formalment, joves sobrequalificats, immigrants amb i sense papers.
- **Entorno**: Plaça de poble castellà, porta de l'Ajuntament, banc de pedra, carrer de cases baixes. Els personatges són veïns del poble o de la comarca, gent corrent amb roba de diari — res de tècnic, res de professional.
- **Tono**:
  - Realista, quotidià, no caricaturesc.
  - Context rural castellà: roba pràctica, gastada, de feina o de carrer. Res de moda, res de marca.
  - Diversitat ètnica (espanyols, marroquins, romanesa, ucraïnès, senegalesa, malià, brasilera, afganesa), d'edat (19-56 anys) i de classe social.
  - La diversitat visual és ètnica, d'edat i de condició: des del jove amb dessuadora universitària fins a la dona gran amb bata de fer feines, des del treballador africà amb roba gastada fins a l'enginyer ucraïnès amb jaqueta de punt.
- **Colores y materiales**:
  - Dominant: tons terrosos i rurals — ocre, marró pols, blau de roba de feina, verd oliva, gris desgastat, blanc de paret encalada.
  - Secundaris: colors de roba gastada, tocs culturals (hijab, jellaba, colors africans).
  - Cada personatge es diferencia per: ètnia (color de pell, trets facials), edat, condició de la roba (nova vs. gastada, neta vs. de feina), accessoris quotidians.
  - Paleta rural i quotidiana amb varietat ètnica com a element visual central.

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
Pixel art character of a rural villager or job applicant, full body, standing pose, facing slightly toward the camera, everyday expression.

[PERSONAL DESCRIPTION HERE]

Contemporary rural Spain, small Castilian village: realistic body proportions (not chibi, not exaggerated), natural skin tones reflecting diverse ethnicities (Spanish, North African, Sub-Saharan African, Eastern European, South American, South Asian), practical everyday hairstyles. Age and body condition differences between characters should be clearly visible.

Clothing: everyday casual and work clothes — faded jeans, work trousers, t-shirts, flannel shirts, old jackets, fleece vests, aprons, rubber boots, worn sneakers. No uniforms, no technical gear. Cultural items where applicable (hijab, headwrap). Optional items: worn bag, folder with papers, walking stick, mobile phone, shopping bag. Clothes should look lived-in and practical, not fashionable.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Rural Castilian tones: earth browns, faded blues, olive greens, dusty ochres, washed-out work-clothes colors.

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
