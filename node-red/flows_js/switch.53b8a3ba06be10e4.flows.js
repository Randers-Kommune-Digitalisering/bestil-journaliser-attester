const Node = {
  "id": "53b8a3ba06be10e4",
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
  "x": 900,
  "y": 2000,
  "wires": [
    [
      "6548c473cadacab6",
      "631095a2afd5d855"
    ],
    [
      "a43a2098379a4b0d"
    ]
  ]
}

module.exports = Node;