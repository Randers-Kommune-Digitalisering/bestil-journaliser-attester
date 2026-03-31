const Node = {
  "id": "4d79dfa81a681cbc",
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
  "y": 1020,
  "wires": [
    [
      "310979045ecec144"
    ]
  ]
}

Node.template = `

Afvisningen er journaliseret i {{rekvisition.navn}}'s personalesag med sagsnummer {{sagsnummer}} (tjenestenr. {{rekvisitus.tjenestenr}}).
`

module.exports = Node;