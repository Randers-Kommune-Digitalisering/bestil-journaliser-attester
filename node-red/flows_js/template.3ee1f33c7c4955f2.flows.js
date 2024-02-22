const Node = {
  "id": "3ee1f33c7c4955f2",
  "type": "template",
  "z": "812b69015d6703b6",
  "name": "Ja",
  "field": "description",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 690,
  "y": 480,
  "wires": [
    [
      "bc4f2a2fc08bf24c"
    ]
  ]
}

Node.template = `
Attest modtaget fra Politiet.
Attesten er uden registrerede forhold.

Attesten er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.<br />
Vær opmærksom på at attesten derfor er vedhæftet denne mail, og skal journaliseres manuelt.
`

module.exports = Node;