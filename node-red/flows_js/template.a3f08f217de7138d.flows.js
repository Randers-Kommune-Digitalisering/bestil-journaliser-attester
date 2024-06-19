const Node = {
  "id": "a3f08f217de7138d",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "4faa8cefca4c99e9",
  "name": "Nej",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 890,
  "y": 660,
  "wires": [
    [
      "923ad6b314d46ee1",
      "32ccc814026d8e07"
    ]
  ]
}

Node.template = `
Ny {{attestTypeString}} på {{rekvisitus.navn}} er modtaget fra Politiet.
Attesten har registrerede forhold!

Personale og HR er blevet notificeret om attestmodtagelsen.
Du bedes kontakte Jura på mail eller telefon.

Attesten er IKKE journaliseret, da der ikke blev fundet en identificerbar personalesag.
Vær opmærksom på at attesten derfor er vedhæftet denne mail, og at det er dit ansvar at journalisere den manuelt.
`

module.exports = Node;