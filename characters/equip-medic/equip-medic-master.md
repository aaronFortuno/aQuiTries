### L'equip mèdic – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 14 personajes (candidats sanitaris) per a l'escenari C8 "L'equip mèdic".

---

## 1. Contexto y tono general

- **Época**: Actualitat, camp de refugiats al nord de Kenya.
- **Situación**: Un camp de refugiats amb 45.000 persones necessita reforçar el seu equip mèdic amb 3 persones. Hi ha epidèmia de còlera activa i necessitats de salut materna. 14 candidats disponibles: professionals mèdics internacionals, sanitaris kenyans locals, i treballadors sanitaris refugiats.
- **Entorno**: Clínica de camp de refugiats — estructura metàl·lica amb tendals, taules plegables, caixes de medicaments, pòsters de l'OMS. Ambient humanitari: pols, calor, recursos mínims.
- **Tono**:
  - Realista, humanitari, no caricaturesc.
  - Context de camp de refugiats: roba pràctica, bates de metge gastades, armilles d'ONG, uniformes sanitaris senzills, roba quotidiana africana.
  - Diversitat ètnica central: pell molt fosca (dinka, somalis), pell fosca (kenyans), pell oliva (nord-africans), pell clara (europeus). Diversitat de vestimenta cultural (hijab, roba tradicional africana, uniformes mèdics occidentals, armilles d'ONG).
  - Contrast visual entre professionals occidentals (equipats, nets) i treballadors locals/refugiats (roba gastada, pràctica, sense logos).
- **Colores y materiales**:
  - Dominant: blanc de bata mèdica, blau d'uniforme sanitari, caqui d'armilla d'ONG, terrós de pols i teixit africà.
  - Secundaris: vermell de creu mèdica, verd de polo d'ONG, colors vius de hijabs i roba africana.
  - Cada personatge es diferencia per: ètnia (element visual central), vestimenta (occidental-mèdica vs. local-pràctica vs. tradicional), accessoris (estetoscopi, carpeta, armilla d'ONG, bossa de plàstic), estat de la roba (nova vs. gastada).
  - Paleta humanitària amb diversitat ètnica i de vestimenta com a element diferenciador.

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
Pixel art character of a medical worker or health professional, full body, standing pose, facing slightly toward the camera, focused and composed expression.

[PERSONAL DESCRIPTION HERE]

Contemporary East African refugee camp setting: realistic body proportions (not chibi, not exaggerated), natural skin tones reflecting diverse ethnicities (European, Kenyan, Somali, South Sudanese, Congolese), practical hairstyles. Ethnic diversity and body differences between characters should be clearly visible.

Clothing: medical and humanitarian attire — white lab coats (some pristine, some worn), blue medical scrubs, NGO vests (khaki or green with logo patches), simple nurse uniforms, or everyday African clothing for community workers. Cultural items where applicable (hijab, headwrap). Optional items: stethoscope, clipboard, medical bag, vaccination kit, box of supplies, ID lanyard, walkie-talkie. Clothing condition tells a story: Western professionals look clean and equipped, local workers look worn and practical.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Humanitarian tones: whites, medical blues, khaki greens, dusty earth browns, warm African-fabric accents.

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
