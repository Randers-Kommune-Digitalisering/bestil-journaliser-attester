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
  "x": 320,
  "y": 1180,
  "wires": [
    [
      "e7338a1d27de82bd"
    ]
  ]
}

Node.template = `
INSERT INTO bestillinger (
    rekvirentNavn,
    rekvirentDQ,
    rekvirentEmail,
    cpr,
    erStraffeattest,
    erBorneattest
)
VALUES
(
    "{{bestilling.rekvirentNavn}}",
    "{{bestilling.rekvirentDQ}}",
    "{{bestilling.rekvirentEmail}}",
    "{{bestilling.rekvisitus}}",
    {{bestilling.erStraffeattest}},
    {{bestilling.erBorneattest}}
)
`

module.exports = Node;