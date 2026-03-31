const Node = {
  "id": "12e8056a6c0ef52a",
  "type": "template",
  "z": "7599a14e87e1d5c4",
  "name": "Body ext",
  "field": "mail_body_ext",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1260,
  "y": 1240,
  "wires": [
    [
      "9f17cf19f7d6e08b"
    ]
  ]
}

Node.template = `

Attesten er journaliseret i personalesag med sagsnummer {{sagsnummer}} (tjenestenr. {{rekvisitus.tjenestenr}}), og vedhæftet til denne mail.
`

module.exports = Node;