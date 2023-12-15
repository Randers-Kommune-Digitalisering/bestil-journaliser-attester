const Node = {
  "id": "4f1b701b8a5d08b4",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "2d0458ee6b467f9b",
  "name": "",
  "property": "token.expires_at",
  "propertyType": "global",
  "rules": [
    {
      "t": "gt",
      "v": "$millis()",
      "vt": "jsonata"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 210,
  "y": 880,
  "wires": [
    [
      "524e86403e722012"
    ],
    [
      "26fb135c4c7f1336"
    ]
  ],
  "_order": 111
}

module.exports = Node;