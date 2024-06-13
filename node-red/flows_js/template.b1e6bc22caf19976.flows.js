const Node = {
  "id": "b1e6bc22caf19976",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "958f6aed62b11b69",
  "name": "Ja",
  "field": "description",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 710,
  "y": 1280,
  "wires": [
    [
      "2d0c992bfe6f3fbd",
      "5d7e76ca05296ebb"
    ]
  ]
}

Node.template = `
En bestilling af en {{attestType}} på {{rekvisitus.navn}} er blevet modtaget, og har registrerede forhold!

Attesten er journaliseret i personalesag med sagsnummer {{sagsnummer}}, og vedhæftet til denne mail
`

module.exports = Node;