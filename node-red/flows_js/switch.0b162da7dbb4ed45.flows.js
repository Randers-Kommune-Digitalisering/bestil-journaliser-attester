const Node = {
  "id": "0b162da7dbb4ed45",
  "type": "switch",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
  "name": "Flere eller ingen delforløb?",
  "property": "count = 0 or count > 1",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 700,
  "y": 840,
  "wires": [
    [
      "a711b1e80347a4dc"
    ],
    [
      "e43ba5d0f92d560d"
    ]
  ]
}

module.exports = Node;