const Node = {
  "id": "787d1e02ca06da8e",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
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
  "x": 940,
  "y": 2040,
  "wires": [
    [
      "d05fc2222aed6f96",
      "6dd82c4182549fde"
    ],
    [
      "53240fb56adf0b72",
      "6d2b8c9fa9474cd7"
    ]
  ]
}

module.exports = Node;