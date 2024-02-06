const Node = {
  "id": "3add1b775cbd9ecb",
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
  "y": 360,
  "wires": [
    [
      "894558ccd508489d"
    ]
  ]
}

Node.template = `
Attest på CPR XXXXXX-XXXX er modtaget fra Politiet.<br />
Attesten er uden registrerede forhold.<br /><br />

Attesten er journaliseret i personalesag med sagsnummer YYYYYY.<br />
Opret en supportsag hvis attesten ikke kan ses i sagen.
`

module.exports = Node;