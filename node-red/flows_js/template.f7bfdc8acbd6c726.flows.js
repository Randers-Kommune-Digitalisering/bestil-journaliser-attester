const Node = {
  "id": "f7bfdc8acbd6c726",
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
  "y": 1300,
  "wires": [
    [
      "32144be86a865485"
    ]
  ]
}

Node.template = `

Attesten er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær derfor opmærksom på at det er Personale og HR’s ansvar at journalisere attesten.
`

module.exports = Node;