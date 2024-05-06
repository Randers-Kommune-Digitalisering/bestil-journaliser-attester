const Node = {
  "id": "07f61b45165e495d",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "5759209171ce76be",
  "name": "Nej",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 810,
  "y": 440,
  "wires": [
    [
      "b8eae3b4cf749d45",
      "600171742f43ae95"
    ]
  ]
}

Node.template = `
Ny {{attestType}} er modtaget fra Politiet.
OBS: Attesten har registrerede forhold!

Attesten er journaliseret i personalesag med sagsnummer {{sagsnummer}}.
`

module.exports = Node;