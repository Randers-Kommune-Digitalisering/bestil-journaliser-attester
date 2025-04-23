const Node = {
  "id": "b32cfb6831ea3bc9",
  "type": "template",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Forespørgsel ↓\\n Opret dublikat bestilling",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 1460,
  "wires": [
    [
      "7da1561465d5e0e1"
    ]
  ]
}

Node.template = `
INSERT INTO 
    bestillinger
    (cpr,
    rekvirentDQ,
    rekvirentEmail,
    rekvirentNavn,
    attestType,
    attestSubType,
    erBestilt,
    erAttestModtaget,
    erDublikat,
    attestModtaget)
VALUES 
    ('{{rekvisitus}}',
    '{{payload.rekvirentDQ}}',
    '{{payload.rekvirentEmail}}',
    '{{payload.rekvirentNavn}}',
    {{{attestType}}},
    {{payload.attestSubType}},
    1,
    1,
    1,
    NOW())
`

module.exports = Node;