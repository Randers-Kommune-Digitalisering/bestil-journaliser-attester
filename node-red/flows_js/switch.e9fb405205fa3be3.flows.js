const Node = {
  "id": "e9fb405205fa3be3",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
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
  "x": 570,
  "y": 1880,
  "wires": [
    [
      "4984df54dc362ad8"
    ],
    [
      "b8d26dd87dd4156e"
    ]
  ]
}

module.exports = Node;