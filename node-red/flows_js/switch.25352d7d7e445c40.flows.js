const Node = {
  "id": "25352d7d7e445c40",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
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
  "x": 600,
  "y": 2200,
  "wires": [
    [
      "94416e9d971f013a"
    ],
    [
      "701d73520c05ba6a"
    ]
  ]
}

module.exports = Node;