### L'embarcació avariada – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 13 personajes (un grup d'amics i amigues de vacances) per a l'escenari C4 "L'embarcació avariada".

---

## 1. Contexto y tono general

- **Época**: Actualitat, estiu, costa del canal de la Mànega entre França i Anglaterra.
- **Situación**: Un grup d'amics i amigues ha llogat una embarcació recreativa per fer una sortida d'un dia des d'un poblet costaner de Normandia. L'embarcació ha xocat contra una roca submarina. La persona que portava el timó ha rebut un cop al cap i està inconscient, i el mòdul GPS s'ha fet malbé. Cal triar: (1) una persona per conduir el vaixell fins a port, (2) una persona per comunicar-se amb els serveis d'emergència i guiar-los, i (3) dues persones per reparar o minimitzar una fuita d'aigua al casc. Total: 4 persones a triar.
- **Entorno**: Mar oberta, canal de la Mànega, un dia d'estiu amb el cel una mica cobert. L'embarcació és una motora recreativa de 12 metres, amb cabina. Els personatges són gent corrent de vacances, no professionals del mar.
- **Tono**:
  - Realista, quotidià, no caricaturesc.
  - Context de vacances convertit en emergència: els personatges porten roba d'estiu casual, alguns amb armilles salvavides posades precipitadament.
  - Diversitat creïble d'edats (24-55 anys), gènere (7 homes, 6 dones), orígens (barreja franco-britànica amb algun altre origen).
  - L'escenari vol mostrar que en una emergència amb gent no professional, les habilitats rellevants poden venir dels llocs més inesperats: un lampista sap de canonades, una estudiant d'art pot saber navegar perquè va créixer amb el seu avi pescador, un monitor de fitness pot entrar en pànic, una mecànica de cotxes pot reparar un motor marítim.
- **Colores y materiales**:
  - Dominant: tons d'estiu casual — samarretes de colors, pantalons curts, vestits d'estiu.
  - Secundaris: taronja d'armilles salvavides, blau marí, blanc de la roba nàutica.
  - Cada personatge es diferencia per: estil de roba (des de molt informal a una mica preparat), complexió, edat, accessoris personals.
  - Paleta estiuenca amb accents de seguretat marítima (taronja, groc).

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
Pixel art character of a person on a recreational boat trip dealing with an emergency at sea, full body, standing pose, facing slightly toward the camera, tense but determined expression.

[PERSONAL DESCRIPTION HERE]

Contemporary person on a summer boat trip in the English Channel: realistic body proportions (not chibi, not exaggerated), natural skin tones, casual summer clothing mixed with hastily put-on safety gear.

Clothing varies by character: summer casual wear (t-shirts, shorts, sundresses, light jackets), some wearing orange life vests hastily put on, boat shoes or sandals or bare feet. Optional items: mobile phone, sunglasses pushed up on head, towel around shoulders, sunscreen, waterproof bag, baseball cap, windbreaker jacket.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Natural summer tones: casual clothing colors, sun-kissed skin, maritime orange safety accents.

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
