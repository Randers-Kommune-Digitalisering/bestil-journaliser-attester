const Node = {
  "id": "496e27b355cd88ef",
  "type": "switch",
  "z": "da7be20cd0c704b6",
  "g": "db929ae7e8b947e6",
  "name": "",
  "property": "azure_token.expires_at",
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
  "x": 250,
  "y": 280,
  "wires": [
    [
      "f0cfcad0822cce88"
    ],
    [
      "57c7e32ee5b107c0"
    ]
  ]
}

module.exports = Node;