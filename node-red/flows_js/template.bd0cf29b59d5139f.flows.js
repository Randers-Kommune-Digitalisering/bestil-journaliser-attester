const Node = {
  "id": "bd0cf29b59d5139f",
  "type": "template",
  "z": "da53ba55e6b4ce3b",
  "g": "b33cb8b26af139f5",
  "name": "Forespørgsel ↓\\n Opret tabel til attestbestillinger",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 230,
  "y": 240,
  "wires": [
    [
      "f55bc66f6a43e55d"
    ]
  ]
}

Node.template = `
CREATE TABLE IF NOT EXISTS {{tablename}} (

    uid int NOT NULL AUTO_INCREMENT,
    bestillingModtaget TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    rekvirentNavn VARCHAR(255),
    rekvirentDQ VARCHAR(255),
    rekvirentEmail VARCHAR(255),

    cpr VARCHAR (255),
    navn VARCHAR (255),
    attestType SMALLINT,
    attestSubType SMALLINT,

    erAfvist BOOL DEFAULT False,
    afvist TIMESTAMP,

    erBestilt BOOL DEFAULT False,
    bestiltHosPoliti TIMESTAMP,

    erAttestModtaget BOOL DEFAULT False,
    attestModtaget TIMESTAMP,

    erJournaliseret BOOL DEFAULT False,
    journaliseret TIMESTAMP,
    sagsnummer VARCHAR(255),

    erAdviseringAfsendt BOOL DEFAULT False,
    adviseringAfsendt TIMESTAMP,
    
    PRIMARY KEY (uid)
);
`

module.exports = Node;