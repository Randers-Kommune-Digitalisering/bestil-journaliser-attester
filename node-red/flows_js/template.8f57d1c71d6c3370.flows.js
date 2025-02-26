const Node = {
  "id": "8f57d1c71d6c3370",
  "type": "template",
  "z": "7599a14e87e1d5c4",
  "name": "Body ext",
  "field": "mail_body_ext",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 940,
  "y": 1080,
  "wires": [
    [
      "daf76ac29b0ac091"
    ]
  ]
}

Node.template = `

Afvisningen er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær opmærksom på at afvisningen derfor er vedhæftet denne mail, og at det er dit ansvar at journalisere den manuelt.
`

module.exports = Node;