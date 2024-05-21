const Node = {
  "id": "2d0c992bfe6f3fbd",
  "type": "switch",
  "z": "812b69015d6703b6",
  "g": "958f6aed62b11b69",
  "name": "",
  "property": "filename",
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
  "x": 770,
  "y": 1280,
  "wires": [
    [
      "d42a43b7da58a5ee"
    ],
    [
      "f49ae88b1311775b"
    ]
  ]
}

module.exports = Node;