const Node = {
  "id": "02f96f186f7ef115",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "012ee3cd0590380d",
  "name": "Tekst",
  "field": "description",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1230,
  "y": 920,
  "wires": [
    [
      "db9649769b13da4b",
      "1054dc7956609e42",
      "e1ba169c57aac0f4"
    ]
  ]
}

Node.template = `
Din bestilling af en eller flere attester er blevet afvist pga. manglende rolle.

Kontakt Personale og HR hvis du mener der er tale om en fejl.
`

module.exports = Node;