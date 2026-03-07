### La llista electoral – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 20 personajes (candidats d'un partit polític conservador) per a l'escenari D1 "La llista electoral".

---

## 1. Contexto y tono general

- **Época**: Actualitat, ciutat mitjana catalana.
- **Situación**: Un partit polític conservador ha de confeccionar la seva llista per a les eleccions municipals. Per llei, la llista ha de tenir un mínim del 40% de cada sexe (almenys 3 dones entre els 6 primers). Hi ha 20 candidats (14 homes i 6 dones) amb mèrits molt desiguals. Cal ordenar els 6 primers de la llista.
- **Entorno**: Ambient institucional i polític municipal — despatxos, sales de plens, actes de campanya. Els personatges són polítics locals, professionals reconvertits a la política i militants del partit.
- **Tono**:
  - Realista, institucional, no caricaturesc.
  - Context de política municipal: els personatges porten vestimenta formal o semi-formal, pròpia d'un entorn polític local.
  - Diversitat d'edats (24-67 anys), 14 homes i 6 dones.
  - El partit és conservador i històricament masculinitzat. L'escenari reflecteix la tensió real entre mèrit i quota: si ordenes per trajectòria, la llista seria majoritàriament masculina; la llei obliga a incloure dones que, tot i estar preparades, no tenen l'experiència de govern dels homes que queden fora.
- **Colores y materiales**:
  - Dominant: tons formals — blau marí, gris fosc, blanc, negre.
  - Secundaris: colors de corbates i complements, algun toc de color en peces femenines.
  - Cada personatge es diferencia per: estil de vestir (des de molt formal a més casual), edat, complexió, accessoris (carpetes, mòbils, insígnies).
  - Paleta institucional amb varietat individual.

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
Pixel art character of a local politician or political candidate in a Catalan town, full body, standing pose, facing slightly toward the camera, confident and approachable expression.

[PERSONAL DESCRIPTION HERE]

Contemporary local politician or candidate in a Catalan municipality: realistic body proportions (not chibi, not exaggerated), natural skin tones, practical professional hairstyles.

Clothing: formal or semi-formal attire appropriate for municipal politics — suits, blazers, dress shirts, ties for men; blouses, blazers, dresses, smart trousers for women. No uniforms. Optional items: folder or documents, mobile phone, reading glasses, lapel pin, lanyard with ID badge, pen in breast pocket.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Institutional tones: navy blues, charcoal grays, whites, muted professional colors.

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
