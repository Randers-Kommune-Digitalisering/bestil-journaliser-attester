const Node = {
  "id": "8999dd7c37c527b7",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Rekvirent findes?",
  "property": "rekvirent",
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
  "x": 750,
  "y": 1060,
  "wires": [
    [
      "c6f8a509f9ba132c"
    ],
    [
      "a4f8c8bcfc105b7b"
    ]
  ]
}

module.exports = Node;