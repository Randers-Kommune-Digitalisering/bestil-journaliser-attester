const Node = {
  "id": "a725715bc3cf2453",
  "type": "template",
  "z": "c715449c21b1a61f",
  "name": "Forespørgsel ↓\\n Opret tabel til attestbestillinger",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 340,
  "wires": [
    [
      "85b3eea77617597b"
    ]
  ],
  "_order": 74
}

Node.template = `
CREATE TABLE IF NOT EXISTS bestillinger (

    uid int NOT NULL AUTO_INCREMENT,
    bestillingModtaget TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sagsbehandlerNavn VARCHAR(255),
    sagsbehandlerDQ VARCHAR(255),
    sagsbehandlerEmail VARCHAR(255),

    cpr VARCHAR (255),
    erStraffeattest BOOL,
    erBorneattest BOOL,

    erBestilt BOOL DEFAULT False,
    bestiltHosPoliti TIMESTAMP,

    erAttestModtaget BOOL DEFAULT False,
    attestModtaget TIMESTAMP,

    erAdviseringAfsendt BOOL DEFAULT False,
    adviseringAfsendt TIMESTAMP,
    
    PRIMARY KEY (uid)
);
`

module.exports = Node;