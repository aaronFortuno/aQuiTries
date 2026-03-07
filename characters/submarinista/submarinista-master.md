### El submarinista – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 12 personajes (bussejadors) per a l'escenari E1 "El submarinista".

---

## 1. Contexto y tono general

- **Época**: Actualitat, Costa Brava, Catalunya.
- **Situación**: Cal reparar una connexió d'un observatori científic submarí a 30 metres de profunditat davant l'Estartit. La reparació requereix calma, precisió manual i resistència al fred (13-14°C, 45-60 minuts). Cal triar 2 persones d'un equip de 12 bussejadors disponibles (6 homes i 6 dones).
- **Entorno**: Port de busseig, embarcació de treball, zona de preparació d'equips. Els personatges són bussejadors de diversos perfils (científics, professionals, recreatius, militars) en equipament de busseig o roba tècnica marítima.
- **Tono**:
  - Realista, tècnic, no caricaturesc.
  - Context marítim professional: vestimenta tècnica de busseig, vestits de neoprè, equips, eines.
  - Diversitat d'edats (24-50 anys), 6 homes i 6 dones.
  - Escenari trampa: la primera impressió (cos gran = bon bussejador) enganya. La tasca requereix habilitats que no depenen del sexe.
- **Colores y materiales**:
  - Dominant: tons marítims i tècnics — negre de neoprè, blau marí, gris d'equips, groc/vermell de seguretat.
  - Secundaris: colors d'accessoris de busseig (aletes, màscares, reguladors), tocs de color en samarretes sota vestits.
  - Cada personatge es diferencia per: complexió (des de molt gran fins a molt petit), estil d'equip (des de professional complet fins a recreatiu bàsic), accessoris (eines, càmera, arpó, mostrejador).
  - Paleta marítima i tècnica amb varietat de cossos com a element diferenciador.

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
Pixel art character of a scuba diver or diving professional, full body, standing pose, facing slightly toward the camera, focused and capable expression.

[PERSONAL DESCRIPTION HERE]

Contemporary diver at a Mediterranean diving port: realistic body proportions (not chibi, not exaggerated), natural skin tones, practical hairstyles suitable for diving.

Clothing: diving and maritime technical attire — wetsuits (full or partially unzipped to waist showing a t-shirt underneath), rash guards, technical diving gear, or casual maritime clothing. Some characters in full wetsuit, others in partial gear or shore clothes. Optional items: diving mask (on forehead or hanging from neck), fins held in hand, regulator, dive computer on wrist, underwater tools, dive slate, underwater camera, weight belt, tank visible on back.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Maritime technical tones: blacks, dark blues, charcoal grays, safety yellows, muted ocean colors.

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
