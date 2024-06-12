const Node = {
  "id": "6261479af3b4d2b8",
  "type": "template",
  "z": "43d6b9b519cc6615",
  "d": true,
  "name": "testdata",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 280,
  "y": 140,
  "wires": [
    [
      "341087aba98a8a1e"
    ]
  ]
}

Node.template = `
[
    {
        "dq": "DQA1234",
        "rolle": "Stedfortraeder for Leder"
    },
    {
        "dq": "DQA4321",
        "rolle": "Leder"
    }
]
`

module.exports = Node;