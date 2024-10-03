const Node = {
  "id": "67adbbd5c7937db4",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "d774a29ec2b63a5e",
  "name": "",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
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
  "x": 1210,
  "y": 2420,
  "wires": [
    [
      "ee8a1a4bf02e7756"
    ],
    [
      "64142e613a01a627"
    ]
  ]
}

module.exports = Node;