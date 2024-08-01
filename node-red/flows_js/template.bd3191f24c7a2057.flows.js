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
  "x": 300,
  "y": 1760,
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
    navn,
    attestType,
    attestSubType,
    erAfvist,
    afvist
)
VALUES
(
    "{{bestilling.rekvirentNavn}}",
    "{{bestilling.rekvirentDQ}}",
    "{{bestilling.rekvirentEmail}}",
    "{{bestilling.rekvisitus}}",
    "{{bestilling.rekvisitusNavn}}",
     {{bestilling.attestType}},
     {{bestilling.attestSubType}},
     {{erAfvist}},
     {{{afvistAt}}}
)
`

module.exports = Node;