const Node = {
  "id": "210d09305bda7587",
  "type": "template",
  "z": "7599a14e87e1d5c4",
  "name": "Body ext",
  "field": "mail_body_ext",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1340,
  "y": 880,
  "wires": [
    [
      "58ad9b85c7dad902"
    ]
  ]
}

Node.template = `

Attesten er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær opmærksom på at attesten derfor er vedhæftet denne mail, og at det er dit ansvar at journalisere den manuelt.
`

module.exports = Node;