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
  "x": 1290,
  "y": 900,
  "wires": [
    [
      "db9649769b13da4b",
      "1054dc7956609e42",
      "1ab76ac693fb3232"
    ]
  ]
}

Node.template = `
Din bestilling af en eller flere attester er blevet afvist pga. manglende rolle.

Kontakt Personale og HR hvis du mener der er tale om en fejl.
`

module.exports = Node;