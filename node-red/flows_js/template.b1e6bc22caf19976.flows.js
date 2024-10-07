const Node = {
  "id": "b1e6bc22caf19976",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "958f6aed62b11b69",
  "name": "Ja",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 710,
  "y": 1120,
  "wires": [
    [
      "e0a4d2e8e5cc1198"
    ]
  ]
}

Node.template = `
En bestilling af en {{attestType}} på {{rekvisitus.navn}} er blevet modtaget, og har registrerede forhold!
Attesten blev rekvireret af {{rekvirentNavn}} ({{rekvirent}}).

Attesten er journaliseret i personalesag med sagsnummer {{sagsnummer}}, og vedhæftet til denne mail
`

module.exports = Node;