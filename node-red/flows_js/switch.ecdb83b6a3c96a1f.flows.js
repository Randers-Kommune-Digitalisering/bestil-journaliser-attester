const Node = {
  "id": "ecdb83b6a3c96a1f",
  "type": "switch",
  "z": "d8101c60e986806b",
  "g": "9a4f435ac5f5f6fa",
  "name": "Is SELECT?",
  "property": "sql",
  "propertyType": "msg",
  "rules": [
    {
      "t": "regex",
      "v": "^SELECT\\s+.*\\s+FROM",
      "vt": "str",
      "case": true
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 640,
  "y": 540,
  "wires": [
    [
      "e108c65921ff392e"
    ],
    [
      "b875469db116a4ec"
    ]
  ]
}

module.exports = Node;