const Node = {
  "id": "4289d48fa270a58f",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "4faa8cefca4c99e9",
  "name": "Afvist",
  "field": "description",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 810,
  "y": 720,
  "wires": [
    [
      "64f9e9e1df775542"
    ]
  ]
}

Node.template = `
Rekvisition af {{attestType}} er blevet afvist af rekvisitus.
Der er sandsynligvis ikke givet samtykke til indhentningen.

Afvisningen er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær opmærksom på at afvisningen derfor er vedhæftet denne mail, og skal journaliseres manuelt.
`

module.exports = Node;