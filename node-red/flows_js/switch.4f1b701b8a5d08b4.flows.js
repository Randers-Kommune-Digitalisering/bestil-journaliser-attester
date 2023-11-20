const Node = {
  "id": "4f1b701b8a5d08b4",
  "type": "switch",
  "z": "971a7ae6df987a48",
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
  "x": 290,
  "y": 700,
  "wires": [
    [
      "8bae152833079679"
    ],
    [
      "26fb135c4c7f1336"
    ]
  ],
  "_order": 21
}

module.exports = Node;