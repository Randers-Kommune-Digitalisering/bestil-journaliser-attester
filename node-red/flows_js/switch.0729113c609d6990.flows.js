const Node = {
  "id": "0729113c609d6990",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "",
  "property": "payload",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "nempty"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 930,
  "y": 1340,
  "wires": [
    [
      "a4f8c8bcfc105b7b"
    ],
    [
      "9f379219ea0204de"
    ]
  ]
}

module.exports = Node;