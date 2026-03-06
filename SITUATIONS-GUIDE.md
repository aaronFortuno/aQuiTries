# Guia per crear noves situacions — aQuiTries

Aquesta guia documenta el procés complet per crear una nova situació (escenari) per al joc aQuiTries, incloent la carpeta de personatges, els arxius mestres i la integració amb el codi de l'aplicació.

---

## 1. Estructura de carpetes

Cada situació té una carpeta pròpia dins de `characters/` amb el nom en slug (guionets, minúscules, sense accents):

```
characters/
  incendi-forestal/          ← A3
  operacio-cor/              ← C1
  tribu-paleolitica/         ← P1
  arbre-caigut/              ← A2
  persona-armada/            ← A4
  obra-construccio/          ← A5
  llar-infants/              ← B1
  cuidar-persona-gran/       ← B2
  nen-plora-parc/            ← B3
  exploracio-cova/           ← C2
  [nova-situacio]/           ← nova
```

Cada carpeta conté **3 arxius mestres**:

| Arxiu | Contingut |
|---|---|
| `[nom]-master.md` | Character bible: context, to general, estil gràfic comú, prompt maestro amb placeholder |
| `[nom]-fichas.txt` | Fitxes de tots els personatges (en català): ID, rol, descripció narrativa, bloc de prompt |
| `prompts-flux2.md` | Prompts complets copy-paste per a FLUX 2 (personatges + fons) |

---

## 2. Format de l'arxiu master (`[nom]-master.md`)

El master és la "bíblia" de la situació. Conté:

### 2.1. Secció 1: Context i to general

- **Època**: quan passa la situació
- **Situació**: què passa, quina tasca cal fer, quants personatges cal triar
- **Entorn**: on passa
- **To**: realista, no caricaturesc. Diversitat creïble d'edats, gènere, orígens
- **Colors i materials**: paleta dominant, com es diferencien els personatges

### 2.2. Secció 2: Estil gràfic comú (Pixel Art)

Sempre el mateix per totes les situacions:

- Sprites de **128×128 px**
- Vista frontal o lleugerament de 3/4, cos sencer
- Pixel art clàssic de videojoc
- Paleta **limitada**, sense degradats suaus
- **Vores netes**, sense anti-aliasing
- Entre **3 i 5 tons per color** (pell, cabell, roba)
- Ombres simples, llum des de dalt
- Fons llis o molt mínim (un sol color)

### 2.3. Secció 3: Prompt maestro per a FLUX 2

El prompt maestro té un placeholder `[PERSONAL DESCRIPTION HERE]` que es substitueix per cada personatge. Estructura:

```text
Pixel art character of a [ROL GENÈRIC] in [CONTEXT], full body, standing pose, facing slightly toward the camera, [EXPRESSIÓ].

[PERSONAL DESCRIPTION HERE]

[DESCRIPCIÓ GENÈRICA DEL CONTEXT: proporcions, pell, pentinat...]

[ROBA I ACCESSORIS GENÈRICS POSSIBLES]

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. [TONS ESPECÍFICS DEL CONTEXT].

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```

**Important**: El bloc d'estil (des de "Environment style" fins al final) és **idèntic** per a totes les situacions. Només canvia la primera línia, el placeholder i el paràgraf de context.

---

## 3. Format de les fitxes (`[nom]-fichas.txt`)

Escrit **en català**. Format per personatge:

```
4.X. Nom Cognom – Títol o descriptor breu
ID: [codi]_nom_cognom
Rol: descripció del rol o funció

Descripció de personatge

[Paràgraf narratiu de 3-5 línies que descriu el personatge, la seva experiència,
fortaleses i debilitats. Escrit en tercera persona, to informatiu però viu.]

Bloque de prompt específico

[Descripció visual detallada en anglès per inserir al placeholder del master prompt.
Inclou: edat, complexió, postura, cabell, expressió facial, roba, accessoris,
postura/acció, paleta de colors específica.]
```

### Convencions de noms i IDs

- **Nom complet**: Nom + Cognom (ex: Marc Torrents, Laia Ferrer)
- **ID**: `{codi_situació}_{nom}_{cognom}` tot en minúscules i sense accents
  - Exemples: `c1_marc_torrents`, `c1_laia_ferrer`, `a3_oriol_camps`
  - El prefix del codi de situació (`p1_`, `a2_`, `a3_`, `c1_`, etc.) **evita col·lisions de noms** entre situacions
- **Gènere**: Indicar `gender: "male"` o `gender: "female"` a les dades JSON. Buscar equilibri de gènere (mai desequilibri total). L'objectiu pedagògic del joc és demostrar que **el gènere no determina les habilitats**.

---

## 4. Format dels prompts (`prompts-flux2.md`)

Cada prompt és **complet i autosuficient** — s'ha de poder copiar i enganxar directament a FLUX 2 sense modificar res.

### 4.1. Estructura del document

```markdown
# Prompts FLUX 2 — [Nom de la situació] (X personatges)

Cada prompt ja inclou el master prompt complet + la descripció específica del personatge.
Només cal copiar i enganxar directament.

---

## 1. Nom Cognom – Descriptor (id_personatge)

​```
[Prompt complet aquí]
​```

---

## 2. Nom Cognom – Descriptor (id_personatge)

​```
[Prompt complet aquí]
​```

[...]

---

## PROMPT PER AL FONS DE L'ESCENARI (background)

​```
[Prompt del fons en pixel art aquí]
​```
```

### 4.2. Estructura de cada prompt de personatge

El prompt combina la primera línia del master + el bloc específic del personatge + el bloc genèric del master:

```text
[Línia d'obertura del master prompt]

[Paràgraf 1: Descripció física — edat, complexió, postura, cabell, expressió]

[Paràgraf 2: Roba i accessoris — detallat, amb elements que diferencien]

[Paràgraf 3: Postura/acció específica + paleta de colors]

[Bloc genèric del master: context, roba, entorn, estil, il·luminació, realisme, sprite]
```

### 4.3. Exemple complet d'un prompt de personatge

```text
Pixel art character of a cardiac surgeon in a modern hospital setting, full body, standing pose, facing slightly toward the camera, professional and focused expression.

Elderly man (63), robust build going slightly soft, slightly stooped posture but with sharp alert eyes that miss nothing. Sparse white hair, deeply lined face with a strong jaw, half-smile of someone who has seen everything. Thick fingers showing slight stiffness.

Wearing dark green surgical scrubs (old-school color preference), a well-worn white lab coat with slightly frayed cuffs, comfortable old leather shoes instead of clogs. A pair of reading glasses on a cord around his neck, a coffee cup in one hand.

Standing with a relaxed, unhurried posture — the confidence of decades. Color palette: dark green scrubs, worn white coat, white hair, veteran dignity tones.

Contemporary medical professional in a modern Catalan hospital: realistic body proportions (not chibi, not exaggerated), natural skin tones, practical hairstyles appropriate for surgery.

Clothing: surgical scrubs (blue, teal, or green variations), optional white lab coat, comfortable closed shoes or surgical clogs. Optional items: surgical cap, stethoscope, tablet/clipboard, surgical loupes, coffee cup, ID badge on lanyard.

Environment style: plain, solid or very minimal background (no scenery), so the character silhouette is clearly readable.

Art style: classic video game pixel art, native 128x128 resolution look, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark) for skin, hair and clothing. Emphasize readability of the silhouette and details at small size.

Lighting: simple, slightly from above, consistent across the character, with clear but minimal highlights and shadows.

Realism: avoid fantasy elements, no exaggerated proportions, no bright synthetic neon colors. Clean medical tones: surgical blues, whites, teals, muted professional colors.

Game-ready sprite: centered in the frame, full body visible, no cropping, character fully inside a 128x128 square.
```

### 4.4. Prompt del fons de l'escenari

El fons segueix el format del document central `scenarios/prompts-flux2-escenaris.md`. **Sempre en pixel art**, no en estil d'il·lustració digital. Estructura:

```text
Pixel art [tipus d'escena], wide horizontal view. [Atmosfera].

[Paràgraf 1: Descripció general de l'espai — elements principals]

[Paràgraf 2: Detalls ambientals — objectes, textures, elements secundaris]

[Paràgraf 3: Atmosfera i llum — hora del dia, condicions]

No humans, no characters, no people visible anywhere in the scene. Empty environment only.

Color palette: [colors dominants i to general]

Art style: pixel art aesthetic inspired by classic video game backgrounds. Visible blocky pixels, limited color palette (no gradients), clean hard edges, no anti-aliasing, no soft shading, no glow effects. Use 3–5 tones per color (light, mid, dark). The image should look like a high-resolution pixel art scene — large visible pixels as a stylistic choice, not a low-resolution image.

Lighting: [descripció de la il·luminació específica]

Composition: wide horizontal format (landscape orientation, roughly 16:9), suitable for a game background, with visual space in the center or foreground where character sprites could be placed on top. [Element focal]. The scene should feel like a stage or diorama.

Output: high-resolution image in landscape orientation. Full scene visible, no cropping.
```

**Important**: El prompt del fons s'ha d'afegir també al fitxer central `scenarios/prompts-flux2-escenaris.md` per tenir-los tots recollits.

---

## 5. Integració amb l'aplicació

### 5.1. Dades JSON

Afegir l'escenari a:
- `src/data/scenarios.json` (català)
- `src/data/scenarios_es.json` (castellà)

Cada personatge necessita:
```json
{
  "id": "c1_nom_cognom",
  "name": "Nom Cognom",
  "age": 45,
  "gender": "male|female",
  "avatar": "c1_nom_cognom.png",
  "description": "Descripció narrativa del personatge...",
  "skills": {
    "nom_habilitat": 8,
    "altra_habilitat": 6
  }
}
```

### 5.2. Habilitats (skills)

- Les habilitats són específiques de cada situació (no universals)
- Valors de 1 a 10
- Cal afegir les noves habilitats als fitxers i18n (`src/i18n/ca.js` i `src/i18n/es.js`) en tres llocs:
  - `skillsShort`: abreviatura d'1-2 caràcters
  - `skillNames`: nom complet
  - (opcionalment `skills` si s'usa el format antic)

### 5.3. Imatges

- Sprites de personatges: `public/avatars/{id}.png` (128×128 px)
- Fons d'escenari: `public/backgrounds/{codi_situació}.png` (format panoràmic 16:9)

---

## 6. Checklist per a una nova situació

- [ ] Crear carpeta `characters/[nom-situacio]/`
- [ ] Escriure `[nom]-master.md` (character bible)
- [ ] Escriure `[nom]-fichas.txt` (fitxes en català)
- [ ] Escriure `prompts-flux2.md` (prompts complets copy-paste)
- [ ] Afegir prompt del fons a `scenarios/prompts-flux2-escenaris.md`
- [ ] Generar imatges amb FLUX 2 i posar-les a `public/avatars/` i `public/backgrounds/`
- [ ] Afegir escenari a `src/data/scenarios.json` (català)
- [ ] Afegir escenari a `src/data/scenarios_es.json` (castellà)
- [ ] Afegir noves habilitats a `src/i18n/ca.js` i `src/i18n/es.js`
- [ ] Verificar que l'app mostra correctament la nova situació
