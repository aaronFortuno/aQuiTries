### El rescat militar – Pixel Art Character Bible

Este documento recoge el contexto y estilo común, el "prompt maestro" para FLUX 2 y la descripción detallada de 18 personajes (militars dels EUA) per a l'escenari C6 "El rescat militar".

---

## 1. Contexto y tono general

- **Época**: Actualitat, zona urbana d'Orient Mitjà (genèrica, no un país específic).
- **Situación**: Un company ha estat capturat i retingut en un edifici controlat per insurgents. Cal reclutar un equip de 5 persones d'entre 18 disponibles per a una missió de rescat d'alt risc que pot durar fins a 18 hores fins a tenir una finestra d'extracció segura. Es poden patir baixes i morts. Cal cohesió, coordinació, domini d'armes, capacitat de decisió ràpida i resistència física i mental.
- **Entorno**: Base d'operacions avançada (FOB) en una zona àrida. Els personatges són militars nord-americans amb rangs, especialitats i backgrounds molt diversos.
- **Tono**:
  - Realista, greu, no caricaturesc ni glorificador de la guerra.
  - Context militar professional: els personatges porten uniformes de combat reals (OCP pattern), equipament tàctic, armes específiques del seu rol.
  - Diversitat que reflecteix la composició real de l'exèrcit dels EUA: representació desproporcionada de minories i classes baixes en rols de combat.
  - 14 homes, 4 dones. La proporció no és 50/50 perquè reflecteix la realitat: les dones representen menys del 5% del personal en unitats de combat directe.
  - L'escenari vol fer visible qui lluita i mor en les guerres: desproporcionadament, homes joves afroamericans i hispans de famílies sense recursos, per als quals l'exèrcit era l'única sortida.
- **Colores y materiales**:
  - Dominant: patró de camuflatge OCP (Operational Camouflage Pattern) — tons marrons, verd oliva, bronzejat.
  - Secundaris: negre d'equip tàctic, bronzejat de botes i guants, metall d'armes.
  - Cada personatge es diferencia per: complexió, equipament específic del seu rol (arma, motxilla de ràdio, kit mèdic, eina de bretxa, controlador de dron), edat, desgast de l'equip (veterans vs. nous).
  - Paleta militar realista, sense colors cridaners.

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
Pixel art character of a US military soldier preparing for a high-risk rescue mission in the Middle East, full body, standing pose, facing slightly toward the camera, serious and focused expression.

[PERSONAL DESCRIPTION HERE]

Contemporary US military personnel at a forward operating base in an arid Middle Eastern setting: realistic body proportions (not chibi, not exaggerated), natural skin tones, regulation military hairstyles or special operations grooming.

Clothing: OCP (Operational Camouflage Pattern) combat uniforms in tan-brown-green, tactical plate carrier vests with MOLLE webbing, tan combat boots, tactical gloves. Equipment varies by role: M4 carbines, sidearms, radios, medical kits, breaching tools, drone controllers. Rank insignia on chest, unit patches on shoulders.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Military earth tones: OCP camo browns and greens, tan gear, matte black equipment, subdued patches.

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```
