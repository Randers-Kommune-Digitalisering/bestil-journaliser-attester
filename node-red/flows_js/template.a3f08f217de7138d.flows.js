const Node = {
  "id": "a3f08f217de7138d",
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
  "y": 180,
  "wires": [
    [
      "54a496bee2f51a3c"
    ]
  ]
}

Node.template = `
Attest på CPR XXXXXX-XXXX er modtaget fra Politiet.<br />
<b>Attesten har registrerede forhold!</b><br /><br />

Attesten er <b>IKKE</b> journaliseret, da der ikke blev fundet en identificerbar personalesag.<br />
Vær opmærksom på at attesten derfor skal journaliseres manuelt.
`

module.exports = Node;