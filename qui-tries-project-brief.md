# PROJECTE: "Qui tries?" — Activitat interactiva sobre igualtat, biologia i prejudicis

## 1. MOTIVACIÓ I JUSTIFICACIÓ

### Context educatiu
Aquesta eina neix de la necessitat de treballar la igualtat de gènere amb alumnat de 6è de primària d'una manera honesta, crítica i no dogmàtica. El discurs habitual del 8 de març tendeix a ser normatiu i poc crític: repeteix consignes sense qüestionar-les i evita les zones grises.

### Problema que resol
El debat sobre igualtat sovint es planteja en termes absoluts: o bé "homes i dones som exactament iguals en tot" o bé posicions retrògrades. La realitat és més complexa: hi ha diferències biològiques objectives entre sexes que fan que en determinats contextos la tria d'una persona per a una tasca sigui raonable i no discriminatòria. Al mateix temps, hi ha àmbits on les tries es fan per prejudici i no per raó. Aquesta eina ajuda a distingir entre les dues coses.

### Objectiu pedagògic
- Fer visible que la igualtat no és uniformitat: igualtat de drets i oportunitats no implica igualtat de capacitats físiques.
- Provocar reflexió sobre quan una tria és raonable (basada en capacitats objectives) i quan és un prejudici.
- Qüestionar per què en alguns àmbits la falta de paritat es denuncia i en d'altres no (construcció vs. llars d'infants, per exemple).
- Obrir conversa sobre les polítiques de quotes i paritat obligatòria: quan ajuden i quan generen problemes.
- Tot plegat sense dogmatismes, convidant l'alumnat a pensar per si mateix.

---

## 2. DESCRIPCIÓ FUNCIONAL

### Flux de l'activitat

1. **Pantalla inicial**: Breu introducció al joc. Explicació: "Se't presentaran situacions reals. Per a cada una, hauràs de triar les persones que creus més adequades. No hi ha respostes correctes ni incorrectes: l'objectiu és pensar per què tries el que tries."

2. **Pantalla de situació**: 
   - A la part superior: descripció de l'escenari (context + tasca + nombre de persones a triar).
   - A la zona central: galeria de personatges disponibles (12-15 per escenari).
   - Cada personatge es mostra com una targeta visual (silueta/avatar estilitzat, NO fotos reals).
   - En fer **hover** sobre un personatge: es desplega un tooltip/label amb les seves dades (nom, edat, alçada, pes, ocupació/habilitats, experiència rellevant, trets destacats).
   - En fer **clic**: el personatge queda seleccionat (canvi visual clar: vora, opacitat, badge de selecció).
   - Comptador visible: "Has triat X de Y persones necessàries".

3. **Botó "Confirmar tria"**: apareix quan s'ha seleccionat el nombre exacte de persones requerides.

4. **Modal de reflexió** (apareix després de confirmar):
   - Mostra la tria feta per l'usuari.
   - Presenta una reflexió escrita sobre l'escenari: què ens diu la tria? Quins biaixos podrien estar en joc? Hi ha raons biològiques objectives o estem triant per estereotip?
   - Punts de debat per treballar a classe (3-4 preguntes obertes).
   - Botó "Següent situació" per avançar.

5. **Ordre aleatori**: Els escenaris es presenten en ordre aleatori cada vegada que es juga. Dins de cada escenari, l'ordre dels personatges també és aleatori.

6. **Pantalla final** (opcional/futura): Resum estadístic de les tries fetes durant la sessió. Patrons detectats. Invitació a la reflexió final.

### Interacció mòbil
- En dispositius tàctils, el hover es substitueix per un tap que mostra la fitxa del personatge, i un segon tap selecciona/deselecciona.
- Disseny responsive obligatori (s'usarà a aules amb tauletes, Chromebooks i ordinadors).

---

## 3. CATÀLEG DE PERSONATGES

Cada escenari té el seu propi conjunt de 12-15 personatges dissenyats per a aquell context. Els personatges varien en:

- **Sexe biològic**: home / dona (proporció variada, no sempre 50/50)
- **Edat**: des d'adolescents fins a gent gran
- **Complexió física**: des de persones molt corpulentes fins a persones primes i petites
- **Habilitats/experiència**: variades i no sempre alineades amb l'estereotip
- **Trets especials**: algú amb formació inesperada, algú amb una lesió, algú amb experiència rellevant però contra-intuïtiva

### Principis de disseny dels personatges
- Incloure sempre algun personatge "trampa": una dona molt corpulenta i forta, un home molt empàtic i amb experiència en cures, una persona gran amb habilitats sorprenents.
- No caricaturitzar: els personatges han de ser creïbles i respectuosos.
- Les dades han de ser suficients perquè l'usuari pugui fer una tria informada, però no tan evidents que la resposta sigui mecànica.

---

## 4. CATÀLEG D'ESCENARIS

### CATEGORIA A: Força física i risc corporal

**A1. La cacera del mamut (tribu paleolítica)**
- Context: "Vivim en una tribu del paleolític. Hem localitzat un animal gran que podria alimentar-nos durant setmanes. Necessitem 4 persones per anar a caçar-lo."
- Personatges: 14 membres de la tribu (homes i dones de diverses edats i complexions). Sense estudis ni professions modernes — les fitxes inclouen: edat, alçada, pes, habilitats (llançar, córrer, rastrejar, sigil, resistència, coneixement d'herbes).
- Reflexió: La majoria triarà homes corpulents i joves. Però la persona que rastreja millor pot ser una dona menuda amb anys d'experiència. La força bruta no és l'únic factor en una cacera. Qui queda al campament és igualment vital per a la supervivència.
- Debat: "Per què has triat qui has triat? La força és l'únic que importa en una cacera? Qui cuida el campament és menys important?"

**A2. L'arbre caigut**
- Context: "Una tempesta ha fet caure un arbre gran que bloqueja l'únic camí d'accés al poble. Cal tallar-lo amb destrals i retirar els troncs. Necessitem 5 persones."
- Personatges: 13 persones del poble (barreja d'edats, sexes, oficis).
- Reflexió: Tasca de força pura. La tria probablement serà majoritàriament masculina. I és raonable: la diferència de força mitjana entre homes i dones és un fet biològic. La pregunta interessant és: "Això és discriminació o sentit comú?"
- Debat: "Si una de les dones és més forta que algun dels homes, la triaries? En què et bases realment: en les dades de la fitxa o en la primera impressió?"

**A3. L'incendi forestal**
- Context: "Un incendi avança cap a un poble de muntanya. Cal organitzar dues tasques urgents: (1) obrir un tallafocs cavant amb pics i pales — necessitem 4 persones; (2) coordinar l'evacuació del poble — necessitem 2 persones. Tria 6 persones en total i assigna-les."
- Personatges: 14 persones (bombers, voluntaris, veïns).
- Reflexió: Dos rols en la mateixa emergència. El tallafocs requereix força. L'evacuació requereix lideratge, calma i comunicació. La tria canvia segons el rol. Això mostra que no hi ha persones "millors" en abstracte: depèn de la tasca.
- Debat: "Has triat les mateixes persones per les dues tasques? Per què no? Què ens diu això sobre la igualtat?"

**A4. La persona armada amb un ganivet**
- Context: "Una persona armada amb un ganivet reté un ostatge dins d'un local. Cal (1) una persona que entri a reduir-la físicament i (2) una persona que negociï des de fora per guanyar temps. Tria 2 persones."
- Personatges: 12 professionals (policies, psicòlogues, negociadors, agents especials — homes i dones de diverses mides i perfils).
- Reflexió: Per a la reducció física, la mida i força importen (és una qüestió de supervivència). Per a la negociació, importen habilitats completament diferents. Mateixa emergència, perfils oposats.
- Debat: "Si només pots enviar una persona per les dues tasques, a qui tries? Existeix el perfil perfecte?"

**A5. L'obra de construcció**
- Context: "S'ha d'aixecar una paret de maons en una obra. Cal carregar sacs de ciment de 25 kg, pujar bastides i treballar a ple sol 8 hores. Necessitem 4 persones."
- Personatges: 13 persones (paletes, arquitectes, manobres, voluntaris).
- Reflexió: Professió amb un 99% d'homes. Ningú ha reclamat mai quotes de paritat a la construcció. Per què?
- Debat: "Per què demanem paritat en consells d'administració però no en obres de construcció? Hauria de ser diferent?"

### CATEGORIA B: Cura, empatia i atenció

**B1. La llar d'infants**
- Context: "Una llar d'infants necessita contractar 3 nous educadors/es per a un grup de nens de 2 anys. Hi ha 14 candidats."
- Personatges: 14 candidats (homes i dones, amb diversa formació en educació infantil, psicologia, pediatria, sense formació rellevant, etc.).
- Reflexió: El 97% del personal de llars d'infants són dones. Ningú reclama places reservades per a homes. De fet, un home treballant amb nens petits genera sospita en molts entorns. Això és un prejudici tan potent com qualsevol altre.
- Debat: "Hauríeu de reservar places per a homes? Per què la falta de paritat aquí no genera debat? Si un home és el candidat més preparat, per què dubtaríem?"

**B2. Cuidar una persona gran**
- Context: "La Carme, de 87 anys, viu sola i necessita un/a cuidador/a que l'acompanyi cada dia: ajudar-la a vestir-se, cuinar, portar-la al metge i fer-li companyia. Tria 1 persona."
- Personatges: 12 candidats (homes i dones, amb diversa experiència en geriatria, infermeria, acompanyament).
- Reflexió: La immensa majoria de cuidadores de gent gran són dones. No hi ha reivindicació de paritat en aquest sector.
- Debat: "Per què aquí no hi ha reivindicació de paritat? Seria diferent si la persona gran fos un home? Per què?"

**B3. El nen que plora al parc**
- Context: "Un nen de 4 anys ha caigut al parc, s'ha fet un trau al genoll i plora desconsolat. No es veu cap adult que sembli el seu pare o mare. Cal que algú hi vagi immediatament a atendre'l. Tria 1 persona."
- Personatges: 14-16 persones presents al parc (barreja diversa: joves, gent gran, una dona marroquina que ve de fer la compra, un sense-sostre que dorm a un parterre, un pare amb el seu fill, una iaia asseguda, un noi amb auriculars, etc.).
- Reflexió: Instintivament la majoria tria una dona. Però és biologia o educació? Un home empàtic i amb experiència pot fer-ho igual de bé. Al parc, qualsevol persona adulta capacitada podria ajudar — però els nostres biaixos filtren qui ens "sembla adequat" i qui no.
- Debat: "Per què instintivament molts triem una dona? Triaries el sense-sostre si fos el més a prop? Per què no? I l'home jove amb tatuatges? Què ens fa confiar o desconfiar d'algú per atendre un nen?"

### CATEGORIA C: Escenaris mixtos / ambigus

**C1. L'operació de cor**
- Context: "Un pacient necessita una operació de cor que durarà 10 hores. Cal triar l'equip de 3 cirurgians que l'operarà."
- Personatges: 13 cirurgians (homes i dones, amb diversa experiència, especialitat, edat).
- Reflexió: Aquí el sexe és completament irrellevant. Importa l'experiència, l'habilitat i la resistència mental. Però els biaixos inconscients apareixen igualment.
- Debat: "En què t'has fixat primer: en l'experiència o en el sexe? Si has dubtat entre dos perfils iguals, quin has triat i per què?"

**C2. L'exploració de la cova**
- Context: "Un equip de 4 persones ha d'explorar una cova desconeguda amb passatges estrets, aigua freda i trams d'escalada. Tria l'equip."
- Personatges: 14 espeleòlegs/exploradors (homes i dones, de diversa complexió).
- Reflexió: Aquí ser petit és un avantatge (passatges estrets) i ser fort un altre (escalada). L'equip ideal és divers no per paritat sinó per complementarietat real de capacitats.
- Debat: "Has triat gent variada? Per què? Hi ha una diferència entre diversitat funcional i quota de paritat?"

**C3. Pilotar un avió de combat**
- Context: "Cal seleccionar 2 pilots per a una missió de combat aeri. Es requereix capacitat de reacció ràpida, resistència a forces G i presa de decisions sota pressió."
- Personatges: 12 pilots militars (homes i dones, amb diversa experiència de vol, resultats en simuladors, condició física).
- Reflexió: Escenari trampa. La força física és irrellevant. Les dones amb menys massa corporal poden tolerar millor certes maniobres. La tria "òbvia" (homes) pot ser equivocada.
- Debat: "Has triat basant-te en les dades o en la intuïció? Si les dades diuen que una pilot dona és millor, per què pot costar triar-la?"

**C4. El vaixell que s'enfonsa**
- Context: "Un vaixell s'enfonsa. Cal assignar 3 rols urgents: (1) una persona que piloti el bot salvavides, (2) una persona que organitzi l'evacuació dels passatgers, (3) una persona que es quedi al vaixell coordinant les comunicacions de ràdio. Tria 3 persones."
- Personatges: 13 tripulants i passatgers (oficials, mariners, personal mèdic — homes i dones).
- Reflexió: Tres rols molt diferents en una mateixa emergència. La distribució ideal probablement és mixta — no per paritat sinó per perfil.
- Debat: "Has triat la mateixa persona per a tots els rols? Per què canvia el perfil ideal segons la tasca?"

**C5. L'expedició al riu (tribu paleolítica)**
- Context: "Fa dies que no plou. Cal que 3 persones caminin 20 km fins al riu més proper per portar aigua. Caldrà resistència, orientació i portar pes de tornada."
- Personatges: 14 membres de la tribu.
- Reflexió: Menys clar que la cacera. En moltes cultures africanes actuals, són les dones qui fan aquesta tasca. La "obvietat" desapareix. Estem triant per biologia o per cultura?
- Debat: "Per què ens sembla 'obvi' que els homes cacin però no ens sembla 'obvi' que les dones portin l'aigua? Totes dues tasques requereixen esforç físic."

### CATEGORIA D: Quotes, paritat i meritocràcia

**D1. La llista electoral**
- Context: "Un partit polític ha de confeccionar la seva llista per a les eleccions municipals. Per llei, la llista ha de tenir un mínim del 40% de cada sexe. Hi ha 10 candidats amb experiència i mèrits diversos. Cal ordenar els 6 primers de la llista."
- Personatges: 10 polítics (homes i dones, amb diversa formació, experiència de govern, àrees d'especialització, trajectòria, valoració ciutadana).
- Reflexió: Si ordenes per mèrit pur, potser no surten 40/60. La llei obliga a reordenar. Això pot fer que algú menys preparat passi per davant d'algú més preparat. La intenció és bona (garantir representació), però el mecanisme pot generar problemes.
- Debat: "Has hagut de canviar la teva llista per complir la quota? Com t'has sentit? Creus que la llei hauria de forçar la paritat o hauria de ser natural? Què passa si no ho forcem i la llista queda 90/10?"

**D2. El consell d'administració**
- Context: "Una empresa tecnològica ha de renovar 4 places del seu consell d'administració (8 membres). La normativa interna exigeix un mínim del 40% de dones al consell. Actualment hi ha 1 dona de 4 que es queden. Cal triar 4 nous membres."
- Personatges: 12 candidats (homes i dones, amb diversa trajectòria empresarial, formació tècnica, experiència en el sector, resultats demostrables).
- Reflexió: Per complir la quota (40% de 8 = mínim 3 dones, ja en tens 1, necessites mínim 2 dones de 4), potser has de triar una dona amb menys experiència per davant d'un home amb més. O potser les dones candidates són millors. El debat no és si les dones poden ser bones directores (evidentment sí), sinó si forçar-ho per quota és el millor mecanisme.
- Debat: "Creus que les quotes ajuden o perjudiquen? Si una dona arriba a un càrrec per quota, com creus que se sent? I els seus companys, com la miren? Hi ha una manera millor d'aconseguir la paritat?"

**D3. Les oposicions a bomber**
- Context: "S'han convocat oposicions per a 5 places de bomber. Les proves físiques inclouen carregar 40 kg en escales, arrossegar una persona de 80 kg i córrer 1,5 km en menys de 6 minuts. Hi ha 14 candidats."
- Personatges: 14 aspirants (homes i dones, amb diversa condició física, resultats en proves, formació en emergències).
- Reflexió: Algunes convocatòries tenen barems físics diferents per a homes i dones. Però el foc no discrimina: el pes d'una persona inconscient és el mateix sigui qui sigui qui la rescata. Abaixar els barems per aconseguir paritat pot posar en risc vides?
- Debat: "Hauria de ser el barem físic el mateix per a homes i dones? Si una dona supera el barem masculí, és justa la selecció? Si no el supera però entra per quota, és segur?"

**D4. La plaça de mestre d'infantil**
- Context: "Una escola busca 2 nous mestres per a P3 (nens de 3 anys). Hi ha 12 candidats."
- Personatges: 12 candidats (majoria dones, 3-4 homes, amb diversa formació i experiència).
- Reflexió: Ningú proposa quotes per a homes a educació infantil. Si ho proposéssim, ens semblaria absurd. Però és estructuralment el mateix que proposar quotes per a dones en enginyeria.
- Debat: "Si et semblaria absurd reservar places per a homes aquí, per què no et sembla absurd reservar places per a dones en altres àmbits? Hi ha una diferència o és el mateix mecanisme?"

**D5. La beca d'enginyeria**
- Context: "Una universitat ofereix 3 beques per a un programa d'enginyeria aeroespacial. Per política de la universitat, almenys 1 beca ha d'anar a una dona. Hi ha 14 sol·licitants."
- Personatges: 14 estudiants (homes i dones, amb diversa nota d'accés, projectes previs, motivació, recomanacions).
- Reflexió: Si la millor candidata és dona, la quota no canvia res. Si no ho és, algú millor preparat es queda fora. La intenció és incentivar que més dones entrin en camps STEM, però el mecanisme puntual pot generar ressentiment.
- Debat: "Què és més just: garantir la plaça o garantir que tothom pugui arribar-hi amb les mateixes oportunitats des del principi? Les quotes solucionen el problema o el maquillen?"

### CATEGORIA E: Escenaris trampa (on la primera impressió enganya)

**E1. El submarinista**
- Context: "Cal reparar una estructura submarina a 30 metres de profunditat. Es requereix calma, precisió manual i resistència al fred. Tria 2 persones."
- Personatges: 12 submarinistes (homes i dones, amb diversa experiència, certificacions, historial de busseig).
- Reflexió: Cap d'aquestes habilitats depèn del sexe de manera determinant. Però el biaix apareixerà igualment.
- Debat: "En què t'has basat? Si no has mirat les dades i has triat per instint, quin instint era?"

**E2. L'astronauta**
- Context: "Una missió espacial de 6 mesos requereix 2 tripulants. Cal resistència psicològica, eficiència en l'ús de recursos (oxigen, menjar) i capacitat de treball en espais confinats."
- Personatges: 12 candidats (homes i dones, amb diversa formació, mèdiques, resultats psicològics, mida corporal).
- Reflexió: Les persones de mida més petita consumeixen menys oxigen i menjar — un avantatge real en una missió espacial. Les dones, de mitjana, tenen avantatge aquí. Un escenari on la biologia afavoreix el perfil femení, contràriament a la intuïció.
- Debat: "T'ha sorprès que aquí ser petit sigui un avantatge? Per què no hi pensem quan pensem en 'astronauta'?"

---

## 5. ARQUITECTURA TÈCNICA

### Stack tecnològic
- **Frontend**: HTML5 + CSS3 + JavaScript vanilla (o React si es vol més estructura)
- **Dades**: JSON estàtic amb tots els escenaris i personatges (no cal backend)
- **Hosting**: Desplegament estàtic (GitHub Pages, Netlify, o qualsevol hosting simple)
- **Responsive**: Mobile-first, funcional en tauletes i Chromebooks d'aula

### Estructura de dades

```json
{
  "scenarios": [
    {
      "id": "a1-cacera-mamut",
      "category": "forca-fisica",
      "title": "La cacera del mamut",
      "context": "Vivim en una tribu del paleolític...",
      "task": "Necessitem 4 persones per anar a caçar.",
      "requiredSelections": 4,
      "characters": [
        {
          "id": "char-01",
          "name": "Arun",
          "sex": "home",
          "age": 28,
          "height": 182,
          "weight": 88,
          "avatar": "avatar-male-tall-muscular",
          "skills": {
            "forca": 9,
            "velocitat": 7,
            "rastreig": 4,
            "sigil": 3,
            "resistencia": 8
          },
          "description": "El més fort del grup. Caçador experimentat.",
          "traits": ["Cicatriu d'una caça anterior", "Impulsiu"]
        }
        // ... 13 personatges més
      ],
      "reflection": {
        "summary": "La majoria de grups trien majoritàriament homes joves i forts...",
        "keyInsight": "La força bruta no és l'únic factor. El rastreig, el sigil i el coneixement del terreny poden ser determinants.",
        "debateQuestions": [
          "Per què has triat qui has triat?",
          "La força és l'únic que importa en una cacera?",
          "Qui cuida el campament: és menys important o igualment vital?"
        ]
      }
    }
  ]
}
```

### Estructura de pantalles

```
[Pantalla Inicial]
  └─> Introducció + Botó "Començar"

[Pantalla d'Escenari] (es repeteix per a cada situació)
  ├── Capçalera: títol + context + "Tria X persones"
  ├── Galeria de personatges (grid responsive)
  │   └── Targeta personatge
  │       ├── Avatar/silueta
  │       ├── Hover/tap: tooltip amb dades
  │       └── Clic/tap: selecció toggle
  ├── Comptador de selecció
  └── Botó "Confirmar tria" (actiu quan selecció = requerits)
        └─> [Modal de Reflexió]
            ├── Resum de la tria
            ├── Reflexió i insight
            ├── Preguntes de debat
            └── Botó "Següent situació"

[Pantalla Final] (opcional)
  └── Resum estadístic + Reflexió global
```

### Components UI principals

1. **CharacterCard**: Targeta de personatge amb avatar, nom i indicador de selecció. En hover mostra tooltip complet.
2. **ScenarioHeader**: Mostra context, tasca i comptador.
3. **SelectionCounter**: Barra o badge que indica quantes persones s'han triat de les requerides.
4. **ReflectionModal**: Modal inferior (slide-up) amb la reflexió post-tria.
5. **ScenarioManager**: Gestiona l'ordre aleatori dels escenaris i la navegació.

### Detalls d'UX

- **Avatars**: Siluetes estilitzades o il·lustracions, MAI fotos reals. Han de transmetre mida, complexió i edat sense caricaturitzar.
- **Tooltip de personatge**: Format clar amb icones per alçada, pes, edat. Barres visuals per habilitats (estil RPG simplificat). Breu descripció en text.
- **Selecció**: Feedback visual immediat (canvi de vora, escala, badge numèric).
- **Modal de reflexió**: Apareix amb animació slide-up des de baix. Fons semi-transparent. Text llegible i ben estructurat.
- **Aleatorietat**: Tant l'ordre dels escenaris com la posició dels personatges dins de cada escenari es barreja a cada sessió.

### Consideracions tècniques

- Tot el contingut en català.
- Sense dependències de backend ni bases de dades.
- El JSON d'escenaris es pot ampliar fàcilment afegint nous objectes.
- El disseny ha de funcionar bé amb projector d'aula (bon contrast, mida de text adequada).
- Accessibilitat: etiquetes ARIA per a les targetes, navegació per teclat possible.

---

## 6. ESTÈTICA I DISSENY

### Direcció visual
To seriós però accessible. No infantilitzar (és per a 6è, tenen 11-12 anys). Paleta sòbria amb accents de color per a les interaccions. Tipografia clara i llegible en projector.

### Inspiració
- Jocs de rol (fitxes de personatge amb stats)
- Documentals interactius (narrativa + interacció)
- Estètica editorial: tipografia potent, espais generosos, poc soroll visual

### Paleta suggerida
- Fons principal: to neutre càlid (blanc trencat o gris molt clar)
- Text: gris fosc / quasi negre
- Accent primari: color intens per a seleccions (taronja càlid o verd fosc)
- Accent secundari: color per a hover/tooltip
- Modal: fons semi-transparent amb targeta blanca

---

## 7. ESCALABILITAT

### Fase 1 (MVP)
- 8-10 escenaris jugables
- 12-15 personatges per escenari
- Reflexions estàtiques
- Sense estadístiques agregades

### Fase 2
- Pantalla final amb estadístiques de la sessió
- Possibilitat d'exportar resultats (PDF o captura)
- Més escenaris

### Fase 3
- Mode professor: veure estadístiques agregades de tota la classe
- Possibilitat que el professor creï escenaris personalitzats
- Estadístiques anònimes globals ("El 78% dels usuaris van triar homes per a la cacera")

---

## 8. NOTES PEDAGÒGIQUES PER AL PROFESSOR

Aquesta eina NO pretén donar respostes. Pretén obrir preguntes. Algunes claus per a l'ús a l'aula:

1. **No hi ha respostes correctes**: Reforçar-ho des del primer minut. L'objectiu és pensar, no encertar.
2. **Jugar individualment, debatre col·lectivament**: Cada alumne fa les seves tries. Després es comparteixen i es discuteix.
3. **No jutjar les tries**: Si algú tria només homes per a la cacera, no està malament. La pregunta és: "per què?"
4. **Connectar amb la vida real**: Després de cada escenari, buscar exemples de la vida quotidiana on es fa la mateixa tria (o on s'evita fer-la).
5. **Les categories D (quotes i paritat) són les més sensibles**: Treballar-les al final, quan el grup ja ha entrat en dinàmica de reflexió.

---

*Document creat com a brief de projecte. Conté la motivació, justificació, arquitectura funcional i tècnica per al desenvolupament de l'aplicació "Qui tries?"*
