const Node = {
  "id": "8999dd7c37c527b7",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
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
  "x": 490,
  "y": 560,
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