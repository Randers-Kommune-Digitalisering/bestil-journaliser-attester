const Node = {
  "id": "bd3191f24c7a2057",
  "type": "template",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "Forespørgsel ↓\\n Indsæt bestilling i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 280,
  "y": 1140,
  "wires": [
    [
      "e7338a1d27de82bd"
    ]
  ]
}

Node.template = `
INSERT INTO bestillinger (
    sagsbehandlerNavn,
    sagsbehandlerDQ,
    sagsbehandlerEmail,
    cpr,
    erStraffeattest,
    erBorneattest
)
VALUES
(
    "{{bestilling.sagsbehandlerNavn}}",
    "{{bestilling.sagsbehandlerDQ}}",
    "{{bestilling.sagsbehandlerEmail}}",
    "{{bestilling.cpr}}",
    {{bestilling.erStraffeattest}},
    {{bestilling.erBorneattest}}
)
`

module.exports = Node;