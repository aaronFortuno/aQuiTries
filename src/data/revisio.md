# Revisió lingüística — scenarios.json (català)

## A. ERRORS LÈXICS I GRAMATICALS CRÍTICS

| #   | Línia | Text erroni                       | Correcció                                                       | Explicació                                                                                                                                                               |
| --- | ----- | --------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|     |       |                                   |                                                                 |                                                                                                                                                                          |
| 2   | 3053  | `"expediatre"`                    | `"ex-pediatre"`                                                 | Paraula mal formada. El prefix "ex-" va amb guionet davant de noms de professió.                                                                                         |
| 3   | ~4211 | `"l'aigua el fa pànic"`           | `"l'aigua li fa pànic"`                                         | Pronom incorrecte: "fer pànic" demana complement indirecte (`li`), no directe (`el`). Calc del castellà.                                                                 |
| 4   | ~4425 | `"La 'obvietat'"`                 | `"L'obvietat"`                                                  | Elisió obligatòria de l'article davant de vocal: `la` + `o...` → `l'`.                                                                                                   |
| 5   | ~5345 | `"pel ciutadà de a peu"`          | `"pel ciutadà del carrer"`                                      | Castellanisme directe (`de a pie`). En català: `de peu` o `del carrer`.                                                                                                  |
| 6   | ~5843 | `"ha escalar equips"`             | `"ha escalat equips"`                                           | Error de conjugació: la seqüència és `ha escrit, ha dissenyat, ha escalat` (participi, no infinitiu).                                                                    |
| 7   | ~6927 | `"build": "mitjà, serio"`         | `"build": "mitjà, seriós"`                                      | Castellanisme: `serio` (castellà) → `seriós` (català).                                                                                                                   |
| 8   | ~7256 | `"ignorar a algú"`                | `"ignorar algú"`                                                | Castellanisme sintàctic: en català el CD personal no porta la preposició `a`.                                                                                            |
| 9   | ~7513 | `"destresa manual inesperable"`   | `"destresa manual insuperable"`                                 | Paraula inexistent en català. `Inesperable` no existeix; la forma correcta és `insuperable` o `excepcional`.                                                             |
| 10  | 1438  | `"porpra de jiu-jitsu brasiler"`  | `"cinturó porpra de jiu-jitsu brasiler"`                        | Nom omès: cal `cinturó porpra`, no només `porpra`.                                                                                                                       |
| 11  | 1755  | `"és un sou"`                     | `"ho fa per la paga"` o `"treballa per un sou, no per vocació"` | Expressió incompleta/incorrecta.                                                                                                                                         |
| 12  | 3004  | `"barba llarga grisa, descurada"` | `"barba llarga grisa, descurat"`                                | `descurada` és femení, però el personatge (Ibrahim) és home. L'adjectiu descriu la persona, no la barba? Si descriu la barba, `descurada` és correcte. Revisar intenció. |

---

## B. ERROR SISTEMÀTIC: ACORD DE GÈNERE AL CAMP `build`

El camp `build` utilitza sistemàticament adjectius **masculins** per a personatges **femenins**. Això afecta desenes de personatges. A continuació, els casos identificats agrupats per patró:

### B.1 — `"mitjà"` → `"mitjana"` (personatges dona)

| Línia | Personatge              |
| ----- | ----------------------- |
| 94    | Lera (P1)               |
| 186   | Asha (P1)               |
| 228   | Mira (P1)               |
| 503   | Núria Font (A2)         |
| 889   | Marina Esteve (A3)      |
| 1027  | Neus Armengol (A3)      |
| 1165  | Aina Bernat (A3)        |
| 1210  | Teresa Grau (A3)        |
| 1321  | Laura Prats (A4)        |
| 1459  | Núria Soldevila (A4)    |
| 1551  | Sònia Martínez (A4)     |
| 2001  | Laia Torrents (B1)      |
| 2047  | Neus Carbonell (B1)     |
| 2185  | Cristina Duran (B1)     |
| 2387  | Montse Ferran (B2)      |
| 2409  | Elena Ibáñez (B2)       |
| 2432  | Carla Pons (B2)         |
| 2479  | Luz Marina Herrera (B2) |
| 2594  | Sandra Gil (B2)         |
| 2773  | Marta Solé (B3)         |
| 2910  | Carme Vilaregut (B3)    |
| 3072  | Yuliana Flores (B3)     |
| 3204  | Anna Martínez (C1)      |
| 3297  | Marta Soler (C1)        |
| 3343  | Elena Vázquez (C1)      |
| 3388  | Gemma Puig (C1)         |
| 3524  | Carla Vidal (C2)        |
| 3619  | Neus Pla (C2)           |
| 4071  | Gemma Ballester (C3)    |
| 4232  | Amara Diallo (C4)       |
| 4328  | Nathalie Perrin (C4)    |

### B.2 — `"prim"` → `"prima"` (personatges dona)

| Línia | Personatge                                                         |
| ----- | ------------------------------------------------------------------ |
| 2070  | Gemma Sala (B1)                                                    |
| 2162  | Sònia Bermúdez (B1)                                                |
| 2231  | Júlia Ferrer (B1)                                                  |
| 2548  | Anna Roca (B2)                                                     |
| 2617  | Noemí Salas (B2)                                                   |
| 3155  | Núria Bosch (C1)                                                   |
| 7531  | Sílvia Bosch (E1) — `"molt petita, prim"` → `"molt petita, prima"` |

### B.3 — `"atlètic"` → `"atlètica"` (personatges dona)

| Línia | Personatge         |
| ----- | ------------------ |
| 457   | Laia Comes (A2)    |
| 935   | Sílvia Torres (A3) |
| 3025  | Neus Sala (B3)     |
| 3716  | Laia Camps (C2)    |

### B.4 — `"fort"` / `"robust"` / `"petit"` → feminitzar (personatges dona)

| Línia | Text erroni                                 | Correcció                            | Personatge                  |
| ----- | ------------------------------------------- | ------------------------------------ | --------------------------- |
| 48    | `"prim i fibrós"`                           | `"prima i fibrosa"`                  | Ina (P1)                    |
| 140   | `"prim a mitjà"`                            | `"prima a mitjana"`                  | Sira (P1)                   |
| 275   | `"arrodonit"`                               | `"arrodonida"`                       | Eda (P1)                    |
| 324   | `"lleuger"`                                 | `"lleugera"`                         | Hani (P1)                   |
| 411   | `"fort i musculat"`                         | `"forta i musculada"`                | Marta Valls (A2)            |
| 526   | `"mitjà-fort"`                              | `"mitjana-forta"`                    | Txell Roca (A2)             |
| 618   | `"petit però robust"`                       | `"petita però robusta"`              | Rosa Batlle (A2)            |
| 710   | `"fort i entrenat"`                         | `"forta i entrenada"`                | Montse Badia (A2)           |
| 802   | `"mitjà-fort"`                              | `"mitjana-forta"`                    | Àngels Martí (A2)           |
| 1073  | `"mitjà, sedentària"`                       | `"mitjana, sedentària"`              | Dolors Sala (A3)            |
| 1119  | `"atlètic lleuger"`                         | `"atlètica lleugera"`                | Pilar Vázquez (A3)          |
| 1257  | `"mitjà-fort"`                              | `"mitjana-forta"`                    | Roser Pla (A3)              |
| 1364  | `"petit i prim"`                            | `"petita i prima"`                   | Mònica Valls (A4)           |
| 1413  | `"mitjà-fort"`                              | `"mitjana-forta"`                    | Carla Reguant (A4)          |
| 1505  | `"petit"`                                   | `"petita"`                           | Elena Vidal (A4)            |
| 2093  | `"lleuger atlètic"`                         | `"lleugera atlètica"`                | Carla Vives (B1)            |
| 2116  | `"mitjà"`                                   | `"mitjana"`                          | Roser Pla (B1)              |
| 2139  | `"maternal, robust"`                        | `"maternal, robusta"`                | Àngels Estrada (B1)         |
| 2208  | `"maternal robust"`                         | `"maternal robusta"`                 | Teresa López (B1)           |
| 2456  | `"robust lleuger"`                          | `"robusta lleugera"`                 | Yolanda Mamani (B2)         |
| 2525  | `"robust maternal"`                         | `"robusta maternal"`                 | Rosa Castillo (B2)          |
| 2570  | `"robust amb edat"`                         | `"robusta amb edat"`                 | Mercè Blanch (B2)           |
| 2640  | `"mitjà robust"`                            | `"mitjana robusta"`                  | Irina Kovach (B2)           |
| 2732  | `"mitjà amb edat"`                          | `"mitjana amb edat"`                 | Pilar Vázquez (B2)          |
| 2819  | `"robust"`                                  | `"robusta"`                          | Fàtima El Amrani (B3)       |
| 2865  | `"petit amb edat"`                          | `"petita amb edat"`                  | Montserrat Frigola (B3)     |
| 3251  | `"prim petit"`                              | `"prima petita"`                     | Laia Ferrer (C1)            |
| 3573  | `"petit i atlètic"`                         | `"petita i atlètica"`                | Júlia Mestres (C2)          |
| 3668  | `"robust mitjà"`                            | `"robusta mitjana"`                  | Gemma Rius (C2)             |
| 3763  | `"mitjà-petit"`                             | `"mitjana-petita"`                   | Anna Ferran (C2)            |
| 3831  | `"petit atlètic"`                           | `"petita atlètica"`                  | Núria Valls (C3)            |
| 3974  | `"prim atlètic alt"`                        | `"prima atlètica alta"`              | Sílvia Navarro (C3)         |
| 4185  | `"mitjà-fort"`                              | `"mitjana-forta"`                    | Chloé Martin (C4)           |
| ~6489 | `"molt poc força de tren superior"` (trait) | `"molt poca força de tren superior"` | Clara Fontanals (D3)        |
| ~7800 | `"build": "normal, actiu"`                  | `"normal, activa"`                   | Marta Fernández (E2)        |
| ~8021 | `"build": "normal, robust"`                 | `"normal, robusta"`                  | María del Carmen López (C7) |

---

## C. NOTES ESTILÍSTIQUES (no bloquejants)

| #   | Línia      | Observació                                                            | Suggeriment                                                                                                       |
| --- | ---------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 1   | 434        | `"ample de tren superior"`                                            | `"ample d'espatlles"` — "tren superior" és un calc del castellà, tot i que s'usa en contextos esportius catalans. |
| 2   | ~4637      | `"No és gaire fort i portar grans càrregues no és el seu punt fort."` | Repetició de `fort`/`punt fort` en la mateixa frase. Suggeriment: `"... és el seu punt feble"` .                  |
| 3   | ~4589      | `"s'apliquen en graus"`                                               | Calc de l'anglès/castellà. Més natural: `"s'apliquen en diferent mesura"`.                                        |
| 4   | ~6082      | `"dins el cos"`                                                       | Preferible `"dins del cos"` en registre formal.                                                                   |
| 5   | 1166, 2503 | `"monyo ràpid"`                                                       | Col·loquialisme acceptable però poc formal per a material educatiu. Alternativa: `"monyo improvisat"`.            |

---

## Resum

- **12 errors lèxics/gramaticals crítics** (castellanismes, paraules inexistents, errors de conjugació)
- **~70 errors d'acord de gènere** al camp `build` (error sistemàtic: adjectius masculins per a personatges femenins)
- **5 notes estilístiques** (no bloquejants, milloren la qualitat)

L'error més estès és l'acord de gènere al camp `build`. Es pot corregir amb un criteri clar: si `"sex": "dona"`, tots els adjectius del camp `build` han de ser femenins.
