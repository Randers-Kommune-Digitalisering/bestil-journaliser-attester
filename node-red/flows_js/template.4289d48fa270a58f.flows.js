const Node = {
  "id": "4289d48fa270a58f",
  "type": "template",
  "z": "812b69015d6703b6",
  "name": "Afvist",
  "field": "description",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 890,
  "y": 540,
  "wires": [
    [
      "bc4f2a2fc08bf24c"
    ]
  ]
}

Node.template = `
Rekvisition af {{attestType}} er blevet afvist af rekvisitus.

Afvisningen er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær opmærksom på at afvisningen derfor er vedhæftet denne mail, og skal journaliseres manuelt.
`

module.exports = Node;