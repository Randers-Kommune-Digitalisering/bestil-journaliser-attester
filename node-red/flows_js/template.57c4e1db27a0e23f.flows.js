const Node = {
  "id": "57c4e1db27a0e23f",
  "type": "template",
  "z": "812b69015d6703b6",
  "name": "Tekst",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 950,
  "y": 1380,
  "wires": [
    []
  ]
}

Node.template = `
Din bestilling af en eller flere attester er blevet afvist pga. manglende rolle.

Kontakt Personale og HR hvis du mener der er tale om en fejl.
`

module.exports = Node;