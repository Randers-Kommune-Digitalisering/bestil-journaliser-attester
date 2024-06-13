const Node = {
  "id": "1a33f849a006fa6e",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "958f6aed62b11b69",
  "name": "Nej",
  "field": "description",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 710,
  "y": 1320,
  "wires": [
    [
      "2d0c992bfe6f3fbd",
      "5d7e76ca05296ebb"
    ]
  ]
}

Node.template = `
En bestilling af en {{attestType}} på {{rekvisitus.navn}} er blevet modtaget, og har registrerede forhold!

Attesten er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær derfor opmærksom på at det er Personale og HR’s ansvar at journalisere attesten.
`

module.exports = Node;