const Node = {
  "id": "84d40ed6bc4be5dd",
  "type": "switch",
  "z": "d35ec07551c9897c",
  "name": "",
  "property": "rekvisitus",
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
  "x": 190,
  "y": 140,
  "wires": [
    [
      "29a5e61aa4b7309b"
    ],
    [
      "e5d804484c22b07d",
      "5ca48de7a4509a3f"
    ]
  ]
}

module.exports = Node;