const Node = {
  "id": "6261479af3b4d2b8",
  "type": "template",
  "z": "dacda834ca49f9f0",
  "d": true,
  "name": "testdata",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 780,
  "y": 40,
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