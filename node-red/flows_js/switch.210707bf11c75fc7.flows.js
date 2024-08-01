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
      "830b0cd54d30e783",
      "de44c0d60efb8f34"
    ],
    [
      "196f5245ad1b22f4",
      "e73c2d2609958896"
    ]
  ]
}

module.exports = Node;