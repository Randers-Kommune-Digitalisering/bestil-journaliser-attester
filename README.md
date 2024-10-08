# Bestil-journaliser-attester
|  [**Beskrivelse**](#beskrivelse)  |  [**Afhængigheder**](#afh%C3%A6ngigheder)  |

## Beskrivelse
Formålet med applikationen er at automatisk journalisere attester som fra Politiet modtages på Randers Kommunes hovedpostkasse. 

### Processbeskrivelse
Applikationens process følger Figur 1. Processen kan overordnet opdeles i følgende trin:
```mermaid
flowchart LR
    A1("Kyndig leder eller sekretær \n (sagsansvarlig)\n udfylder formular vedr. bestilling \n af attest på medarbejder")
    A2[Formular modtages og \n gemmes i database]
    
    B1(Bestillingsansvarlig tilgår \n liste over formularer som \n afventer bestilling)
    B2[Liste over CPR-numre for \n hver attest-type udstilles]
    B3(Bestillingsansvarlig tilgår \n Politiets hjemmeside og bestiller \n attester for hver attest-type)
    B4(Bestillingsansvarlig bekræfter \n bestilling af attester)
    B5[Formularer markeres \n som `bestilt` i database]

    A1 --> A2

    B1 --> B2
    B2 --> B3
    B3 --> B4
    B4 --> B5

    A[Attest modtages \n i mailboks]
    B{Findes CPR & \n sagsansvarlig \n i mail?}
    C(Find relaterede \n personalesager)
    D{Kan én personalesag  \n tilknyttes ansættelsen??}
    E(Journaliser attest \n i personalesag)
    F(Adviser sagsansvarlig \n om journalisering)
    G[Attest sendes \n til manuel behandling]

    A --> B
    B --> |Ja|C
    B --> |Nej|G
    C --> D
    D --> |Ja|E
    D --> |Nej|G
    E --> F
```
#### A. Anmodning om attest på medarbejder
##### 1) Bestillingsformular udfyldes af kyndig medarbejder
Formularen udstilles til Kommunens medarbejdere i XFlow, hvorfra attestanmodningen sendes til applikationen.

##### 2) Formular modtages 
Attestanmodningen modtages i applikationen hvorfra den lagres i database.

#### B. Bestilling af anmodne attester
##### 1) En udvalgt bestillingsansvarlig fra Kommunen tilgår liste over attestanmodninger.

##### 2) Lister for hhv. straffe- og børneattestanomodninger udstilles separat til hurtig bestilling.

##### 3) Bestillingsansvarlig foretager manuel bestilling af attesterne på Politiets hjemmeside.

##### 4) Bestillingsansvarlig bekræfter bestilling af de udstilte anmodninger.

##### 5) Formularer / attestanmodningerne markeres som bestilt, og afventer modtagelse.

#### C. Ved modtagelse af attest:
##### 1) Attest modtages
Kommunen modtager attester på hovedpostkassen. Herfra er opsat et filter, således at attester videresendes til en attest-postkasse, hvorfra applikationen læser modtagne mails.

##### 2) Mail kontrolleres
Applikationen kontrollerer afsender, titel og indhold af mailen for at sikre, at der er tale om en attest der er videresendt hovedpostkassen. Herunder kontrolleres det at mailen indeholder en mailadresse på en rekvirent, samt CPR på den medarbejder attesten omhandler. Såfremt der ikke findes de nødvendige oplysninger, sendes attesten tilbage til hovedpostkassen til manuel behandling

##### 3) Personalesag fremsøges
Der søges i SBSYS efter aktive personalesager på medarbejderen. Findes der 0 eller flere end 1 sag, sendes attesten tilbage til hovedpostkassen til manuel behandling.

##### 4) Attest journaliseres
Attesten journaliseres den aktive personalesag som foreligger i SBSYS. Ligeledes notificeres rekvirent på mail om at attesten er modtaget og journaliseret.

## Afhængigheder
Løsningen er afhængig af en række ⚙️ software komponenter og en række ☁️ netværksadgange til eksterne ressourcer for at fungere.

⚙️ |  [Node.js 18](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)  |  [Node-RED 3.0.2](https://nodered.org/docs/getting-started/windows)  |  [node-red-node-email](https://flows.nodered.org/node/node-red-node-email)  |

☁️ |  [https://cdn.jsdelivr.net/npm](https://cdn.jsdelivr.net/npm) 

☁️  |  https://randers.dk 
