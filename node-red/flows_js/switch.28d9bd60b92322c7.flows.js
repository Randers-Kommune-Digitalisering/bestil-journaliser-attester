const Node = {
  "id": "28d9bd60b92322c7",
  "type": "switch",
  "z": "c715449c21b1a61f",
  "g": "3c5129bfe50adfad",
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
  "x": 170,
  "y": 600,
  "wires": [
    [
      "fe7895bb7baff7c0"
    ],
    [
      "bb3413349f7d6779"
    ]
  ]
}

module.exports = Node;