const Node = {
  "id": "594e820fabb49d4e",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Request body: \\n File details",
  "field": "body",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 500,
  "y": 1120,
  "wires": [
    [
      "6ad8a0aeb037f05f"
    ]
  ],
  "_order": 38
}

Node.template = `
{
    "SagID": {{sagsId}}
}
`

module.exports = Node;