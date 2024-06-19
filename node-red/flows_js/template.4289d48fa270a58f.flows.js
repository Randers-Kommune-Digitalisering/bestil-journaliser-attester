const Node = {
  "id": "4289d48fa270a58f",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "4faa8cefca4c99e9",
  "name": "Afvist",
  "field": "body",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 890,
  "y": 740,
  "wires": [
    [
      "32ccc814026d8e07"
    ]
  ]
}

Node.template = `
Rekvisition af {{attestTypeString}} på {{rekvisitus.navn}}  er blevet afvist.
Der er sandsynligvis ikke givet samtykke til indhentningen.

Afvisningen er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær opmærksom på at afvisningen derfor er vedhæftet denne mail, og skal journaliseres manuelt.
`

module.exports = Node;