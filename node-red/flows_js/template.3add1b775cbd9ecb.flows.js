const Node = {
  "id": "3add1b775cbd9ecb",
  "type": "template",
  "z": "812b69015d6703b6",
  "name": "Ja",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 690,
  "y": 660,
  "wires": [
    [
      "b8eae3b4cf749d45"
    ]
  ]
}

Node.template = `
Attest modtaget fra Politiet.
Attesten er uden registrerede forhold.

Attesten er journaliseret i personalesag med sagsnummer {{payload.SagsNummer}}.
`

module.exports = Node;