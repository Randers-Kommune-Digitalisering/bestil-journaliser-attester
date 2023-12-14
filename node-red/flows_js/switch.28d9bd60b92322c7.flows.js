const Node = {
  "id": "28d9bd60b92322c7",
  "type": "switch",
  "z": "c715449c21b1a61f",
  "name": "",
  "property": "token.expires_at",
  "propertyType": "flow",
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
  "x": 350,
  "y": 740,
  "wires": [
    [
      "fe7895bb7baff7c0"
    ],
    [
      "bb3413349f7d6779"
    ]
  ],
  "_order": 90
}

module.exports = Node;