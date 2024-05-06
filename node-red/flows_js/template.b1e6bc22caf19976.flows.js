const Node = {
  "id": "b1e6bc22caf19976",
  "type": "template",
  "z": "812b69015d6703b6",
  "name": "Tekst",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 690,
  "y": 1300,
  "wires": [
    [
      "32bf09d50173ed34",
      "5d7e76ca05296ebb"
    ]
  ]
}

Node.template = `
En bestilling af en {{attestType}} er blevet modtaget, og har registrerede forhold!
Attesten er journaliseret i personalesag med sagsnummer {{sagsnummer}}.
`

module.exports = Node;