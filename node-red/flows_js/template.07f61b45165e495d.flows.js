const Node = {
  "id": "07f61b45165e495d",
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
  "y": 400,
  "wires": [
    [
      "894558ccd508489d",
      "ff384e8aa04019b9"
    ]
  ]
}

Node.template = `
Attest på CPR XXXXXX-XXXX er modtaget fra Politiet.<br />
<b>Attesten har registrerede forhold!</b><br /><br />

Attesten er journaliseret i personalesag med sagsnummer YYYYYY.<br />
Opret en supportsag hvis attesten ikke kan ses i sagen.
`

module.exports = Node;