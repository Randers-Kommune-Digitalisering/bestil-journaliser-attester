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
  "x": 480,
  "y": 1140,
  "wires": [
    [
      "0d0c73cce993cb7f"
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