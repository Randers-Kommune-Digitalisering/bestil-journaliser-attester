const Node = {
  "id": "210707bf11c75fc7",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
  "name": "Request OK?",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "200",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 940,
  "y": 1720,
  "wires": [
    [
      "4afdec063a9e27c1",
      "830b0cd54d30e783"
    ],
    [
      "196f5245ad1b22f4",
      "e73c2d2609958896"
    ]
  ]
}

module.exports = Node;