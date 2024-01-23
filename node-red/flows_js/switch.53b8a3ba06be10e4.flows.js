const Node = {
  "id": "53b8a3ba06be10e4",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "2d0458ee6b467f9b",
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
  "y": 860,
  "wires": [
    [
      "3c7e217712e1123a"
    ],
    [
      "a43a2098379a4b0d"
    ]
  ]
}

module.exports = Node;