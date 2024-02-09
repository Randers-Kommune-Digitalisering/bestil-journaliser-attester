const Node = {
  "id": "787d1e02ca06da8e",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "name": "Request OK?",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "200",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 880,
  "y": 1840,
  "wires": [
    [
      "d05fc2222aed6f96"
    ],
    [
      "53240fb56adf0b72",
      "6d2b8c9fa9474cd7"
    ]
  ]
}

module.exports = Node;