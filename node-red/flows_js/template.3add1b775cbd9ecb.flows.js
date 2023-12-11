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
  "x": 650,
  "y": 380,
  "wires": [
    [
      "894558ccd508489d"
    ]
  ],
  "_order": 149
}

Node.template = `
Her er en test mail 

<br /><br />

Html linjeskift
`

module.exports = Node;