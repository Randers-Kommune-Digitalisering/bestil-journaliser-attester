const Node = {
  "id": "1a33f849a006fa6e",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "958f6aed62b11b69",
  "name": "Nej",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 710,
  "y": 1160,
  "wires": [
    [
      "e0a4d2e8e5cc1198"
    ]
  ]
}

Node.template = `
En bestilling af en {{attestType}} på {{rekvisitus.navn}} er blevet modtaget, og har registrerede forhold!
Attesten blev rekvireret af {{rekvirentNavn}} ({{rekvirent}}).

Attesten er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær derfor opmærksom på at det er Personale og HR’s ansvar at journalisere attesten.
`

module.exports = Node;