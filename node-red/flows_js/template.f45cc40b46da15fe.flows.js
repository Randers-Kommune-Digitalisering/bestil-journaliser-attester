const Node = {
  "id": "f45cc40b46da15fe",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 620,
  "y": 1520,
  "wires": [
    [
      "894558ccd508489d"
    ]
  ],
  "_order": 65
}

Node.template = `
Her er en test mail 

<br /><br />

Html linjeskift
`

module.exports = Node;