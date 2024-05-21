const Node = {
  "id": "80882d57c9ff465d",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "5759209171ce76be",
  "name": "Afvist",
  "field": "description",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 810,
  "y": 520,
  "wires": [
    [
      "b8eae3b4cf749d45"
    ]
  ]
}

Node.template = `
Rekvisition af {{attestTypeString}} er blevet afvist af rekvisitus.
Der er sandsynligvis ikke givet samtykke til indhentningen.

Afvisningen er journaliseret i personalesag med sagsnummer {{sagsnummer}}.
`

module.exports = Node;