const Node = {
  "id": "3add1b775cbd9ecb",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Tekst",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 610,
  "y": 1820,
  "wires": [
    [
      "894558ccd508489d"
    ]
  ],
  "_order": 134
}

Node.template = `
Her er en test mail 

<br /><br />

Html linjeskift
`

module.exports = Node;