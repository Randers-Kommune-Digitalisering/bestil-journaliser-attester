const Node = {
  "id": "169823d6acac242b",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Email findes?",
  "property": "rekvisition.rekvirentEmail",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 780,
  "y": 1040,
  "wires": [
    [
      "9b9fc6f6a2a9a45a"
    ],
    [
      "79f0b064603f1cef"
    ]
  ]
}

module.exports = Node;