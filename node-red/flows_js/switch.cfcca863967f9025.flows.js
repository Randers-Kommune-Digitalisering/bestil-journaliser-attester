const Node = {
  "id": "cfcca863967f9025",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
  "name": "",
  "property": "token.expires_at",
  "propertyType": "flow",
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
  "x": 1710,
  "y": 920,
  "wires": [
    [
      "9f0d2ae4f040c8e3"
    ],
    [
      "9dc26e78774c3ebb"
    ]
  ]
}

module.exports = Node;