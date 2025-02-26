const Node = {
  "id": "c2df11daea7425b8",
  "type": "template",
  "z": "7599a14e87e1d5c4",
  "name": "Body",
  "field": "mail.body",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 730,
  "y": 820,
  "wires": [
    [
      "1fee97e8030f5504"
    ]
  ]
}

Node.template = `
Hej {{rekvisition.rekvirentNavn}},

En ny {{attestTypeString}} på {{rekvisition.navn}} er modtaget fra Politiet.

`

module.exports = Node;