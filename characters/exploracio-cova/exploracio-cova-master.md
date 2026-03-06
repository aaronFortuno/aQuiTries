### L'exploració de la cova – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 14 personajes (espeleòlegs i exploradors) per a l'escenari C2 "L'exploració de la cova".

---

## 1. Contexto y tono general

- **Época**: Actualidad, zona de muntanya calcària a Catalunya (Prepirineu, Montsec o Garraf).
- **Situación**: Un equip de 4 persones ha d'explorar una cova desconeguda amb passatges estrets, aigua freda i trams d'escalada. Cal triar l'equip ideal entre 14 candidats amb perfils molt diversos.
- **Entorno**: Entrada d'una cova natural en un entorn de muntanya. Els personatges són espeleòlegs, escaladors, científics i exploradors amb diferents nivells d'experiència i condicions físiques.
- **Tono**:
  - Realista, professional, no caricaturesc.
  - Context d'aventura tècnica: els personatges porten equipament d'espeleologia (cascos amb llum frontal, arnesos, cordes, neoprè) però amb variacions individuals.
  - Diversitat creïble d'edats (22-55 anys), gènere (7 homes, 7 dones), complexions i perfils.
  - L'escenari vol mostrar que la diversitat de cossos és un avantatge funcional real: ser petit permet passar per forats estrets, ser fort permet escalar, ser resistent permet aguantar hores. L'equip ideal no és homogeni.
- **Colores y materiales**:
  - Dominant: tons terrosos, grisos de roca, taronja i groc de seguretat (cascos, arnesos).
  - Secundaris: neoprè negre, blau fosc de roba tècnica, verd de samarretes de muntanya.
  - Cada personatge es diferencia per: complexió (des de molt petit/a a robust/a), edat, cabell, accessoris específics (càmera, mapa, eines geològiques).
  - Paleta natural amb accents de seguretat (taronja, groc).

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
Pixel art character of a cave explorer and speleologist preparing for a cave expedition, full body, standing pose, facing slightly toward the camera, focused and determined expression.

[PERSONAL DESCRIPTION HERE]

Contemporary outdoor adventurer and caver in a Catalan mountain setting: realistic body proportions (not chibi, not exaggerated), natural skin tones, practical hairstyles appropriate for caving.

Clothing varies by character: caving overalls or technical outdoor gear, neoprene wetsuits for water sections, harnesses with carabiners, headlamps on helmets. Optional items: climbing rope coils, geological hammer, waterproof map case, camera, chalk bag, descender device, first-aid pouch.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Practical earth tones with high-visibility safety accents (orange helmets, yellow harnesses) where appropriate.

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
