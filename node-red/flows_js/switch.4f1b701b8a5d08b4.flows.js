const Node = {
  "id": "4f1b701b8a5d08b4",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
  "name": "",
  "property": "token.expires_at",
  "propertyType": "global",
  "rules": [
    {
      "t": "gt",
      "v": "$millis()",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 170,
  "y": 1360,
  "wires": [
    [
      "524e86403e722012"
    ],
    [
      "26fb135c4c7f1336"
    ]
  ]
}

module.exports = Node;