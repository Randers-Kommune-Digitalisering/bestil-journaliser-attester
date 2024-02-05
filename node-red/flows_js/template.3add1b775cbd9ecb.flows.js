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
  "x": 590,
  "y": 380,
  "wires": [
    [
      "894558ccd508489d"
    ]
  ]
}

Node.template = `
Den attest som du har bestilt er netop blevet journaliseret
på SBSYS sag med sagsnr. 1.
<br /><br />
Opret en supportsag hvis attesten ikke kan ses i sagen.
`

module.exports = Node;