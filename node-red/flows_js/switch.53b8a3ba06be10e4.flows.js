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
  "x": 860,
  "y": 1380,
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