const Node = {
  "id": "5d1146983b4fbaa2",
  "type": "template",
  "z": "7599a14e87e1d5c4",
  "name": "Body ext",
  "field": "mail_body_ext",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1120,
  "y": 820,
  "wires": [
    [
      "a54d6c386cf2c34c"
    ]
  ]
}

Node.template = `

Attesten er uden registrerede forhold.

`

module.exports = Node;