const Node = {
  "id": "3add1b775cbd9ecb",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "5759209171ce76be",
  "name": "Ja",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 810,
  "y": 480,
  "wires": [
    [
      "b8eae3b4cf749d45"
    ]
  ]
}

Node.template = `
Ny {{attestType}} er modtaget fra Politiet.
Attesten er uden registrerede forhold.

Attesten er journaliseret i personalesag med sagsnummer {{sagsnummer}}.
`

module.exports = Node;