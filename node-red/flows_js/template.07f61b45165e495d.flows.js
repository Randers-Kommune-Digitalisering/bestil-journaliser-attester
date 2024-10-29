const Node = {
  "id": "07f61b45165e495d",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "5759209171ce76be",
  "name": "Nej",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 890,
  "y": 460,
  "wires": [
    [
      "b8eae3b4cf749d45",
      "d33cf0f7a1a86cc2"
    ]
  ]
}

Node.template = `
Ny {{attestTypeString}} på {{rekvisitus.navn}} er modtaget fra Politiet.
Attesten har registrerede forhold!

Personale og HR er blevet notificeret om attestmodtagelsen, og varetager det videre forløb.
Du bliver kontaktet i denne forbindelse.

Attesten er journaliseret i {{rekvisitus.navn}}'s personalesag (tjenestenr. {{rekvisitus.tjenestenr}}).
`

module.exports = Node;