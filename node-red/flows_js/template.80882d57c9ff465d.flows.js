const Node = {
  "id": "80882d57c9ff465d",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "5759209171ce76be",
  "name": "Afvist",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 890,
  "y": 540,
  "wires": [
    [
      "b8eae3b4cf749d45"
    ]
  ]
}

Node.template = `
Rekvisition af {{attestTypeString}} på {{rekvisitus.navn}} er blevet afvist.
Der er sandsynligvis ikke givet samtykke til indhentningen.

Afvisningen er journaliseret i {{rekvisitus.navn}}'s personalesag (tjenestenr. {{rekvisitus.tjenestenr}}).
`

module.exports = Node;