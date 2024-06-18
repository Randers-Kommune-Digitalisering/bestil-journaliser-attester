const Node = {
  "id": "71bf53225d6c6772",
  "type": "switch",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
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
  "y": 140,
  "wires": [
    [
      "b363d31f1cc528a7"
    ],
    [
      "7fd7f419f401469c"
    ]
  ]
}

module.exports = Node;