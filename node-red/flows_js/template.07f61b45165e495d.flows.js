const Node = {
  "id": "07f61b45165e495d",
  "type": "template",
  "z": "812b69015d6703b6",
  "name": "Nej",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 690,
  "y": 700,
  "wires": [
    [
      "b8eae3b4cf749d45"
    ]
  ]
}

Node.template = `
Attest er modtaget fra Politiet.
OBS: Attesten har registrerede forhold!

Attesten er journaliseret i personalesag med sagsnummer {{payload.SagsNummer}}.
Opret en supportsag hvis attesten ikke kan ses i sagen.
`

module.exports = Node;