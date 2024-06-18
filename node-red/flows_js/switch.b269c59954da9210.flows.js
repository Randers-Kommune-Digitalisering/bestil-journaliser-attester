const Node = {
  "id": "b269c59954da9210",
  "type": "switch",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
  "name": "Antal sager?",
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
  "x": 670,
  "y": 520,
  "wires": [
    [
      "c02bc085e1800817"
    ],
    [
      "7790880769334a33"
    ]
  ]
}

module.exports = Node;