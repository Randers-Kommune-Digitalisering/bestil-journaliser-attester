const Node = {
  "id": "8999dd7c37c527b7",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Rekvisition findes?",
  "property": "rekvisition",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 510,
  "y": 1060,
  "wires": [
    [
      "169823d6acac242b"
    ],
    [
      "a4f8c8bcfc105b7b"
    ]
  ]
}

module.exports = Node;