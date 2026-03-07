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

**C4. L'embarcació avariada**
- Context: "Un grup d'amics i amigues ha llogat una embarcació recreativa per fer una sortida d'un dia des d'un poblet costaner de Normandia. L'embarcació ha xocat contra una roca submarina. La persona que portava el timó ha rebut un cop al cap i està inconscient, i el mòdul GPS s'ha fet malbé. Cal triar: (1) una persona per conduir el vaixell fins a port, (2) una persona per comunicar-se amb els serveis d'emergència i guiar-los fins a l'embarcació, i (3) dues persones per reparar o minimitzar una fuita d'aigua al casc. Tria 4 persones."
- Personatges: 13 amics i amigues de vacances (homes i dones, amb professions i experiències molt diverses — cap d'ells és mariner professional).
- Reflexió: En una emergència amb gent no professional, les habilitats rellevants venen dels llocs més inesperats. Un lampista sap tapar fuites, una estudiant d'art pot saber navegar perquè va créixer amb el seu avi pescador, un monitor de fitness pot entrar en pànic, una mecànica de cotxes pot reparar un motor marítim. L'aparença i el gènere no prediuen qui serà útil.
- Debat: "A qui has triat per cada rol i per què? T'has fixat en la professió o en l'aparença? Hi ha algú que t'ha sorprès quan has llegit la seva descripció? Per què tendim a associar 'emergència al mar' amb un perfil concret?"

**C5. L'expedició al riu (tribu paleolítica)**
- Context: "Fa dies que no plou. Les reserves d'aigua de la tribu s'estan esgotant. Cal que 3 persones caminin 20 km fins al riu més proper per portar aigua. Caldrà resistència per caminar tot el dia, orientació per trobar el camí i força per portar pes de tornada. Tria 3 persones."
- Personatges: 16 membres de la tribu (homes i dones de totes les edats: des de nens de 5-6 anys fins a ancians de gairebé 60, incloent un caçador experimentat però amb una lesió al genoll que el fa anar coix).
- Reflexió: Menys clar que la cacera. En moltes cultures africanes actuals, són les dones qui fan aquesta tasca. La resistència i l'orientació importen més que la força bruta: les recol·lectores caminen hores cada dia i coneixen el terreny millor que els caçadors. L'home més fort pot ser el pitjor candidat si consumeix molta aigua i no sap orientar-se. La presència de nens i ancians obliga a pensar per què els descartem i si les mateixes raons s'apliquen en grau a d'altres.
- Debat: "Per què ens sembla 'obvi' que els homes cacin però no ens sembla 'obvi' que les dones portin l'aigua? Totes dues tasques requereixen esforç físic. Has descartat algú per l'edat o la mida? Què passaria si enviessis en Theron (lesionat) perquè és qui millor coneix el camí?"

**C6. El rescat militar**
- Context: "Un company ha estat capturat i retingut en un edifici controlat per insurgents en una zona urbana d'Orient Mitjà. Cal reclutar un equip de 5 persones per a una missió de rescat d'alt risc que pot durar fins a 18 hores. Es poden patir baixes. Cal cohesió, coordinació, domini d'armes, capacitat de decisió ràpida i resistència física i mental. Tria 5 persones."
- Personatges: 18 militars dels EUA (majoritàriament homes, amb rangs i especialitats realistes: infanteria, forces especials, metge de combat, comunicacions, intel·ligència, enginyeria de combat, drons, logística).
- Reflexió: Escenari que reflecteix una realitat incòmoda. Als EUA, els afroamericans representen el 13% de la població però històricament entre el 20-25% de les baixes en combat. Molts soldats d'infanteria provenen de famílies sense recursos ni opcions laborals: l'exèrcit és la seva única sortida. Les dones gairebé no estan presents en unitats de combat directe. L'escenari convida a preguntar-se: qui lluita i mor en les guerres? Per què? I també: en un equip de 5, cal només gent que dispari o també un metge, un especialista en comunicacions, algú que parli àrab?
- Debat: "Per què la majoria dels soldats en combat provenen de barris pobres? Si l'exèrcit és l'única sortida per a moltes famílies, és realment una tria lliure? Has triat alguna dona per a l'equip? Per què sí o per què no? Necessites algú que parli àrab o un metge, o només tiradors?"

**C7. L'equip d'escombriaires (Valdecampos, Castella-La Manxa)**
- Context: "L'Ajuntament de Valdecampos (poble fictici de Castella-La Manxa, ~800 habitants) convoca 4 places d'escombriaire. Sou mínim, contracte temporal de 12 mesos. No es requereix formació específica ni experiència prèvia. S'hi presenten 16 persones."
- Personatges: 16 candidats organitzats en 4 blocs. Homes locals/zona (5): exobrer de fàbrica tancada (27 anys d'antiguitat, 54 anys), segon exobrer de la mateixa fàbrica (56 anys, exalcohòlic rehabilitat, divorciat), graduat en Història (24 anys, sobrequalificat), jove sense ESO acabada (19 anys, mai ha treballat), paleta aturat d'un poble veí (49 anys, problemes d'esquena). Dones locals (3): mestressa de casa de 48 anys (28 anys de treball invisible, 3 fills grans, mai ha cobrat), vídua de 55 anys (20 anys netejant en negre, genolls gastats), divorciada de 43 anys (9 anys de supermercat, 2 fills, la més "preparada"). Immigrants amb papers (4): temporero marroquí (36 anys, 9 anys a Espanya), treballadora domèstica romanesa (44 anys, 14 anys a Espanya, ciutadana UE), enginyer mecànic ucraïnès refugiat (41 anys, titulació no homologada), cambrera brasilera (32 anys, sociable, "integrada"). Immigrants sense papers (4): treballadora agrícola senegalesa (29 anys, ruta canària, filla a Dakar), jornaler marroquí (31 anys, cosí del Mohamed regularitzat — mirall legal), treballador agrícola malià (23 anys, ruta Mediterrània, gairebé no parla castellà), exmaestra afganesa (34 anys, sol·licitant d'asil — tècnicament sí pot treballar).
- Reflexió: La feina no requereix habilitats especials — el dilema no és "qui ho farà millor" sinó "qui mereix la feina". Cada tria revela un sistema de valors: localisme (prioritzar "els d'aquí"), papers (descartar per il·legalitat persones que ja contribueixen a l'economia local), gènere i treball invisible (28 anys de feina domèstica no compten com a "experiència"), edat i desgast (castigar per haver treballat massa), sobrequalificació (el graduat "ja trobarà una altra cosa" — però no la troba), estigma (passat d'alcohol, abandó escolar), "integració" com a biaix (acceptem la brasilera sociable però no el malià que no parla l'idioma).
- Debat: "Per què has triat qui has triat? T'has fixat primer en si eren d'aquí o de fora? Has descartat algú perquè no té papers — si no es pot contractar legalment, ja no existeix com a persona? La María del Carmen no ha treballat mai formalment — creus que no ha treballat? Si fossis l'alcalde/essa, com justificaries la teva tria davant de les 12 persones que es queden sense feina?"

**C8. L'equip mèdic (camp de refugiats, Kenya)**
- Context: "Un camp de refugiats al nord de Kenya amb 45.000 persones (majoritàriament somalis i sud-sudanesos) necessita reforçar l'equip mèdic de la clínica amb 3 persones. Hi ha una epidèmia de còlera activa i necessitats de salut materna. Hi ha 14 candidats disponibles: professionals mèdics internacionals, sanitaris kenyans locals, i treballadors sanitaris que són ells mateixos refugiats."
- Personatges: 14 candidats en 3 blocs. Internacionals (5): cirurgià nord-americà de Harvard (46 anys, tècnicament brillant però culturalment impacient, no parla somali), metgessa belga de medicina tropical (39 anys, 8 anys de camp, la millor occidental), metge d'urgències suec (31 anys, primera missió, totalment verd), pediatra italiana (43 anys, experiència en camp a Jordània), infermera britànica (28 anys, entusiasta però inexperimentada). Kenyans locals (4): infermera veterana del camp (44 anys, 9 anys al camp, coneix cada família — la millor candidata real), metge general de l'hospital comarcal (52 anys, 24 anys diagnosticant sense recursos), oficial clínic (36 anys, 7 anys al camp, ha gestionat 3 epidèmies de còlera), agent de salut comunitària kenyana-somali (30 anys, nascuda al camp, 4 idiomes, pont únic amb les dones somalis). Refugiats (5): exmetge somali (48 anys, 12 anys de pràctica + 13 anys al camp, credencial no reconeguda), llevadora sud-sudanesa (33 anys, infermera formada, 200+ parts al camp), comadrona tradicional somali (56 anys, zero formació formal, 35 anys d'experiència, 500+ parts), farmacèutic congolès (39 anys, gestiona el magatzem de medicaments), agent de salut refugiada somali (26 anys, xarxa de 12 promotores que ella mateixa ha format).
- Reflexió: El millor equip per a aquest camp concret no inclou cap metge occidental: Grace (infermera, 9 anys al camp) + Peter (oficial clínic, 7 anys) + Amina (agent comunitària, 4 idiomes). Cap títol de Harvard substitueix 9 anys de coneixement directe de la comunitat. El cirurgià americà és tècnicament brillant però pràcticament inútil aquí: no parla l'idioma, no coneix la cultura, i la clínica no té quiròfan. L'escenari toca el "complex del salvador blanc" i la invisibilitat dels treballadors sanitaris locals i refugiats.
- Debat: "Has triat metges occidentals? Per què t'han semblat 'millors'? La Grace és infermera, no metgessa — però porta 9 anys al camp. Val més la titulació o l'experiència directa? El Dr. Abdi era metge a Somàlia — per què el seu títol no val a Kenya? Qui salva més vides: el cirurgià de Harvard que no parla somali o l'agent comunitària que parla 4 idiomes?"

**C9. El restaurant d'alta cuina (Madrid)**
- Context: "El restaurant 'Aura' (2 estrelles Michelin, Madrid) busca 3 nous cuiners/es per reforçar la brigada de cuina. Hi ha 14 candidats de 10 nacionalitats."
- Personatges: 14 candidats en 3 blocs. Europeus/formació clàssica (5): xef francès de Le Cordon Bleu (38 anys, 3 estrelles, brillant però tòxic — 3 sous-chefs han dimitit), xef espanyol del Basque Culinary Center (35 anys, fiable però no innovador), xef veterà espanyol exelBulli (45 anys, 22 anys d'experiència, datat), xef italiana d'Osteria Francescana (31 anys, creativa, resilient), xef suec de Noma (28 anys, fermentació, jove i limitat). Internacionals/formació no-europea (5): xef nigerià (33 anys, primer de promoció a Lagos, restaurant d'èxit, afro-fusió — la seva cuina "no compta" com a alta cuina), xef pakistanès (36 anys, Le Cordon Bleu Londres + Lahore, 1 estrella, expert en espècies), xef xilena (34 anys, Boragó top 26 mundial, terroir patagònic, dona en món d'homes), xef sud-africana (30 anys, The Test Kitchen Cape Town, fusió afro-europea, potencial creatiu enorme), xef japonès de kaiseki (37 anys, 14 anys d'experiència, precisió superior, barrera idiomàtica). Atípics (4): cuinera autodidacta sevillana (42 anys, taperia llegendària, zero formació formal, les millors croquetes d'Andalusia), xef jove marroquí-espanyol (27 anys, nascut a Lavapiés, DiverXO, fusió Maghreb-Espanya), pastissera espanyola (29 anys, Le Cordon Bleu, excel·lent però "només" postres — el gueto rosa), cuiner influencer (33 anys, 2,2M seguidors, espectacular en pantalla, mediocre en cuina).
- Reflexió: El sistema Michelin defineix "excel·lència culinària" segons paràmetres europeus. Un xef nigerià primer de promoció amb restaurant d'èxit "no compta" perquè la seva cuina no és francesa. Les dones són el 55% dels estudiants de cuina i el 6% dels caps de cuina amb estrella. L'equip que la majoria triarà (3 homes blancs europeus) és el conservador; l'equip que aportaria més innovació inclou el nigerià, el pakistanès i la xilena — cap dels quals "sembla" d'alta cuina.
- Debat: "Què és 'alta cuina' i qui ho decideix? L'Emeka és primer de promoció i té un restaurant d'èxit — per què la seva cuina 'no compta'? En Hassan sap més d'espècies que qualsevol graduat de Le Cordon Bleu — per què el coneixement pakistanès val menys que el francès? Les dones cuinen a casa a tot el planeta — per què només el 6% dels caps de cuina amb estrella són dones?"

### CATEGORIA D: Quotes, paritat i meritocràcia

**D1. La llista electoral**
- Context: "Un partit polític conservador ha de confeccionar la seva llista per a les eleccions municipals d'una ciutat mitjana catalana. Per llei, la llista ha de tenir un mínim del 40% de cada sexe (almenys 3 dones entre els 6 primers). Hi ha 20 candidats (14 homes i 6 dones) amb experiència i mèrits molt desiguals. Cal ordenar els 6 primers de la llista."
- Personatges: 20 candidats. El partit és històricament masculinitzat: entre els homes hi ha regidors amb 8-16 anys d'experiència de govern i resultats demostrables. Entre les dones, n'hi ha una d'excel·lent, una de sòlida, i la resta amb trajectòries clarament inferiors als homes que quedarien fora per la quota.
- Reflexió: Si ordenes per mèrit pur, la llista seria majoritàriament masculina. La llei obliga a incloure almenys 3 dones, cosa que significa que 2-3 homes amb més experiència i resultats quedarien fora perquè cal fer lloc a dones amb menys trajectòria. La intenció de la llei és garantir representació, però el mecanisme genera un dilema real: és just que una persona menys preparada ocupi un lloc per sobre d'una de més preparada pel seu gènere? I al mateix temps: si no ho forcem, el partit mai no tindrà dones amb experiència perquè mai no les posa a la llista.
- Debat: "Has hagut de canviar la teva llista per complir la quota? Com t'has sentit? Creus que la llei hauria de forçar la paritat o hauria de ser natural? Què passa si no ho forcem i la llista queda 90/10? I què passa si ho forcem i algú incompetent acaba sent regidor/a?"

**D2. El consell d'administració**
- Context: "Una empresa tecnològica ha de renovar 4 places del seu consell d'administració (8 membres). La normativa interna exigeix un mínim del 40% de dones al consell. Actualment hi ha 1 dona de 4 que es queden. Cal triar 4 nous membres."
- Personatges: 12 candidats (homes i dones, amb diversa trajectòria empresarial, formació tècnica, experiència en el sector, resultats demostrables).
- Reflexió: Per complir la quota (40% de 8 = mínim 3 dones, ja en tens 1, necessites mínim 2 dones de 4), potser has de triar una dona amb menys experiència per davant d'un home amb més. O potser les dones candidates són millors. El debat no és si les dones poden ser bones directores (evidentment sí), sinó si forçar-ho per quota és el millor mecanisme.
- Debat: "Creus que les quotes ajuden o perjudiquen? Si una dona arriba a un càrrec per quota, com creus que se sent? I els seus companys, com la miren? Hi ha una manera millor d'aconseguir la paritat?"

**D3. Les oposicions a bomber**
- Context: "S'han convocat oposicions per cobrir 5 places de bomber en un parc de bombers d'una ciutat mitjana catalana. Les proves físiques inclouen carregar 40 kg pujant 4 pisos d'escales, arrossegar un maniquí de 80 kg durant 20 metres, córrer 1.500 m en menys de 6 minuts, pujar corda de 5 m, circuit amb ERA i natació 50 m. Hi ha 18 aspirants (12 homes i 6 dones)."
- Personatges: 18 aspirants amb diversa condició física, experiència i formació. Inclou: exmilitar excepcional, bomber voluntari amb experiència real, opositor de laboratori, paleta amb força bruta, crossfitter espectacular, bomber veterà amb lesió, infermera d'urgències, halteròfila competitiva, bombera voluntària, triatleta, entre d'altres. Les dones inclouen una excepcionalment forta (Neus, halteròfila) que supera alguns homes, però la majoria queden per sota dels homes forts en proves de força del tren superior.
- Reflexió: El foc no discrimina, la gravetat no discrimina, el pes d'una víctima inconscient no discrimina. Si establim barems físics diferenciats per sexe (com fan moltes convocatòries reals), més dones aproven, però aprovar amb barem diferenciat no canvia la física: el maniquí segueix pesant 80 kg. Si establim barem únic, gairebé cap dona passa (excepte les excepcionalment fortes). La solució potser és rols especialitzats dins el cos (prevenció, sanitari, logística, comandament) on la força bruta no sigui crítica.
- Debat: "Hauria de ser el barem físic el mateix per a homes i dones? Si una dona supera el barem masculí, és justa la selecció? Si no el supera però entra per barem diferenciat, és segur enviar-la a un rescat on cal carregar 80 kg? I si no forcem la paritat, el cos de bombers queda 98% masculí — és acceptable?"

**D4. La plaça de mestre d'infantil**
- Context: "Una escola pública busca 2 nous mestres per a P3 (nens de 3 anys). Hi ha 12 candidats (9 dones i 3 homes). El procés valora titulació, experiència en educació infantil, formació complementària, entrevista i classe pràctica."
- Personatges: 12 candidats amb perfils variats. Inclou mestres veteranes, especialista en educació especial, recent graduada, educadora de llar d'infants, mestra Montessori, i 3 homes: un amb 8 anys d'experiència en P3 (top 2 per mèrit), un recent graduat i un mestre de primària que vol canviar. L'home experimentat (Jordi) és clarament un dels millors candidats, però pateix el biaix invers: desconfiança d'algunes famílies per ser home sol amb nens de 3 anys.
- Reflexió: Ningú proposa quotes per a homes a educació infantil (on són el 5%). Si ho proposéssim, ens semblaria absurd. Però és estructuralment el mateix mecanisme que proposar quotes per a dones en enginyeria o bombers. Si acceptem el desequilibri de gènere quan beneficia les dones, per què el corregim quan beneficia els homes? I els homes que trien professions feminitzades pateixen un biaix real: desconfiança, sospita, sobre-vigilància.
- Debat: "Si et semblaria absurd reservar places per a homes aquí, per què no et sembla absurd reservar places per a dones en altres àmbits? Si un home excel·lent perd la plaça perquè les famílies prefereixen una dona, és discriminació? I si una enginyera excel·lent perd la plaça perquè l'empresa prefereix un home, és el mateix?"

**D5. La beca d'enginyeria**
- Context: "La TU Frankfurt ofereix 3 beques completes per al seu MSc en enginyeria aeroespacial. Per política de diversitat, almenys 1 beca ha d'anar a una dona. Hi ha 16 sol·licitants (11 homes i 5 dones) d'arreu d'Europa i Orient Mitjà."
- Personatges: 16 estudiants de 10 nacionalitats (alemanys, suecs, txec, polonès, rus-alemany, italians, britànic-xinès, francès-algerià, libanès-alemany, jordana, austríaca). 3 homes amb trajectòries excepcionals (Lukas, Erik, Maximilian) — un quedarà segur fora si la quota reserva 1 beca per a dona. La millor candidata femenina (Sophia) és posició 3-4: excel·lent però en terreny ambigu. Inclou perfils de superació (Karim, Youssef, Fatima) que plantegen el debat mèrit acadèmic vs. trajectòria vital.
- Reflexió: La quota no resol per què només 5 de 16 sol·licitants són dones. Resol el símptoma (poca representació) però no la causa (per què poques dones arriben a sol·licitar). Seria més eficaç invertir en programes STEM per a nenes als 10 anys que reservar beques als 24? La quota protegeix però també estigmatitza: "ha entrat per mèrit o per ser dona?"
- Debat: "Què és més just: garantir la plaça o garantir que des de petites tinguin les mateixes oportunitats d'arribar-hi? Les quotes solucionen el problema o el maquillen? Si la Sophia és la 4a millor i entra per quota, com se sent? I el Maximilian que queda 3r i fora?"

### CATEGORIA E: Escenaris trampa (on la primera impressió enganya)

**E1. El submarinista**
- Context: "Cal reparar una connexió d'un observatori científic submarí a 30 metres de profunditat davant l'Estartit (Costa Brava). La reparació requereix calma, precisió manual i resistència al fred (13-14°C, 45-60 minuts). Cal triar 2 persones d'un equip de 12 bussejadors (6 homes i 6 dones)."
- Personatges: 12 bussejadors amb perfils molt diversos: instructor de busseig (amb episodi de narcosi), bomber-bussejador del GRAE (fort però imprecís), bussejador militar (combat, no reparació), pescador submarí (apnea, zero SCUBA), comptable amb 500 immersions tropicals, estudiant novell. I 6 dones: biòloga marina (14 anys busseig científic en aigües fredes — LA millor candidata), soldadora industrial amb certificació de busseig (precisió manual professional), instructora impecable, oceanògrafa veterana (artrosi a les mans), fisioterapeuta amb mans excel·lents, apneista competitiva.
- Reflexió: Cap de les habilitats requerides (calma, precisió, fred) depèn del sexe. Les 2 millors candidates són dones (Mireia i Lena), però els jugadors probablement triaran homes grans i forts perquè "busseig profund" evoca força i aventura. La trampa: la tasca no requereix força, sinó paciència i mans hàbils.
- Debat: "En què t'has basat? Si no has mirat les dades i has triat per instint, quin instint era? I d'on ve?"

**E2. L'astronauta**
- Context: "L'ESA i l'ISRO (Indian Space Research Organisation) envien una missió conjunta de 6 mesos a l'estació espacial. La càpsula té espai per a 2 tripulants. Cal resistència psicològica a l'aïllament prolongat, eficiència en l'ús de recursos (oxigen, aigua, aliment — cada quilo de pes corporal consumeix més), capacitat de treball en espais confinats i habilitats tècniques. Cal triar 2 persones d'un equip de 12 candidats preseleccionats (6 homes i 6 dones), de països europeus i de l'Índia."
- Personatges: 12 candidats (6 homes i 6 dones) de diversa procedència i religió. Homes: pilot de proves suec (1,91 m, 90 kg — l'astronauta de pel·lícula), enginyer de sistemes indi (hindú, Chennai), enginyer aeroespacial alemany (claustrofòbia lleu), pilot de combat sikh (turbant, imponent), metge de vol francès, científic informàtic jainista (1,64 m, 57 kg — el candidat "ocult"). Dones: enginyera aeroespacial índia de Kerala (1,58 m, 51 kg — la millor candidata), metgessa-biofísica alemanya (experiència antàrtica), biòloga molecular musulmana amb hijab (1,56 m, 49 kg — la més eficient), enginyera de materials espanyola, científica veterana índia (interfície ESA-ISRO), pilot d'helicòpter francesa (la dona més gran). Dades clau per candidat: alçada, pes, consum O₂ (L/min), necessitat calòrica (kcal/dia), dies d'aïllament en simulador.
- Reflexió: L'escenari inverteix la intuïció. Un astronauta de 90 kg consumeix un 40-50% més d'oxigen i calories que un de 55 kg — en 6 mesos, 500 kg més de subministraments a 20.000€/kg. La NASA ho sap fa dècades: les dones, de mitjana, són més eficients per a missions espacials. El pilot suec (Henrik, posició 12 en eficiència) "sembla" astronauta, però és el pitjor candidat. Les millors candidatures són dones petites (Priya, Ananya) i l'home petit jainista (Sanjay), que ningú triaria a primer cop d'ull.
- Debat: "T'ha sorprès que aquí ser petit sigui un avantatge? Per què, quan penses en 'astronauta', imagines algú gran i fort? D'on ve aquesta imatge, i com condiciona les teves decisions?"

---

## 5. ARQUITECTURA TÈCNICA

### Stack tecnològic
- **Frontend**: React 19 + Vite 7 — SPA lleugera
- **Backend temps real**: Firebase Firestore (mode guiat professor/alumnes)
- **Dades**: JSON estàtic amb tots els escenaris i personatges
- **Hosting**: GitHub Pages (deploy estàtic via `gh-pages` + GitHub Actions)
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

### Fase 3 (implementada)
- Mode professor: el docent crea una sala amb codi de 4 dígits, alumnes s'hi connecten, resultats agregats per gènere en temps real (Firebase Firestore)
- Possibilitat que el professor creï escenaris personalitzats (futur)
- Estadístiques anònimes globals ("El 78% dels usuaris van triar homes per a la cacera") (futur)

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
