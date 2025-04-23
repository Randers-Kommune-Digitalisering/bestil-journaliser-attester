const Node = {
  "id": "c12c6986fa43976c",
  "type": "switch",
  "z": "ed8da944366aaffa",
  "name": "",
  "property": "cpr_token.expires_at",
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
  "x": 190,
  "y": 80,
  "wires": [
    [
      "80a57b2ddf8ca4fc"
    ],
    [
      "a5cf3dbf8954da6a"
    ]
  ]
}

module.exports = Node;