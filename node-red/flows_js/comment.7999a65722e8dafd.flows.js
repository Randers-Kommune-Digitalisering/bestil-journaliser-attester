const Node = {
  "id": "7999a65722e8dafd",
  "type": "comment",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "SQL Data",
  "info": "",
  "x": 380,
  "y": 300,
  "wires": []
}

Node.info = `
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
`

module.exports = Node;