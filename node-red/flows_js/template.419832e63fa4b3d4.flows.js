const Node = {
  "id": "419832e63fa4b3d4",
  "type": "template",
  "z": "9f905819f05b7a1a",
  "name": "testdata",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 640,
  "y": 120,
  "wires": [
    [
      "96d9b649bfd8a429"
    ]
  ]
}

Node.template = `
[
    {
        "dq": "DQA8932",
        "rolle": "Stedfortraeder for Leder"
    },
    {
        "dq": "DQA4321",
        "rolle": "Leder"
    }
]
`

module.exports = Node;