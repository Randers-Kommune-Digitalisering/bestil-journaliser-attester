const Node = {
  "id": "6261479af3b4d2b8",
  "type": "template",
  "z": "43d6b9b519cc6615",
  "name": "testdata",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 300,
  "y": 140,
  "wires": [
    [
      "84ecc7dd6ca507f0"
    ]
  ]
}

Node.template = `
dq;rolle;
DQA1234;Leder;
DQA4321;Stedfortræder;
`

module.exports = Node;