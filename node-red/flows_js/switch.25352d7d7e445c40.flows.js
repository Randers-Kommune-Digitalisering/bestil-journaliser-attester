const Node = {
  "id": "25352d7d7e445c40",
  "type": "switch",
  "z": "90c6b0b502e346fa",
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
  "x": 520,
  "y": 2000,
  "wires": [
    [
      "2d21752abc3cfc1c"
    ],
    [
      "701d73520c05ba6a"
    ]
  ]
}

module.exports = Node;