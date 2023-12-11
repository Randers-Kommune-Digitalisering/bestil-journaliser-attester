const Node = {
  "id": "bd3191f24c7a2057",
  "type": "template",
  "z": "c715449c21b1a61f",
  "name": "Forespørgsel ↓\\n Indsæt bestilling i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 480,
  "wires": [
    [
      "e7338a1d27de82bd"
    ]
  ],
  "_order": 75
}

Node.template = `
INSERT INTO bestillinger (
    sagsbehandlerNavn,
    sagsbehandlerDQ,
    cpr,
    erStraffeattest,
    erBorneattest
)
VALUES
(
    {{bestilling.sagsbehandlerNavn}},
    {{bestilling.sagsbehandlerDQ}},
    {{bestilling.cpr}},
    {{bestilling.erStraffeattest}},
    {{bestilling.erBorneattest}}
)
`

module.exports = Node;