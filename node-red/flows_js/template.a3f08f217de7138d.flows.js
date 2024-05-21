const Node = {
  "id": "a3f08f217de7138d",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "4faa8cefca4c99e9",
  "name": "Nej",
  "field": "description",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 810,
  "y": 640,
  "wires": [
    [
      "dac6afa62d5cf0e1",
      "64f9e9e1df775542"
    ]
  ]
}

Node.template = `
Ny {{attestType}} er modtaget fra Politiet.
OBS: Attesten har registrerede forhold!

Attesten er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær opmærksom på at attesten derfor er vedhæftet denne mail, og skal journaliseres manuelt.
`

module.exports = Node;