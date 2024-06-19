const Node = {
  "id": "3ee1f33c7c4955f2",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "4faa8cefca4c99e9",
  "name": "Ja",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 890,
  "y": 700,
  "wires": [
    [
      "32ccc814026d8e07"
    ]
  ]
}

Node.template = `
Ny {{attestTypeString}} på {{rekvisitus.navn}} er modtaget fra Politiet.
Attesten er uden registrerede forhold.

Attesten er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær opmærksom på at attesten derfor er vedhæftet denne mail, og at det er dit ansvar at journalisere den manuelt.
`

module.exports = Node;