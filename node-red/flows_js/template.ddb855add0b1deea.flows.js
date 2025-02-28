const Node = {
  "id": "ddb855add0b1deea",
  "type": "template",
  "z": "7599a14e87e1d5c4",
  "name": "Body ext",
  "field": "mail_body_ext",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1660,
  "y": 820,
  "wires": [
    [
      "826b87d155a163df"
    ]
  ]
}

Node.template = `

Attesten er journaliseret i {{rekvisition.navn}}'s personalesag (tjenestenr. {{rekvisitus.tjenestenr}}).
`

module.exports = Node;