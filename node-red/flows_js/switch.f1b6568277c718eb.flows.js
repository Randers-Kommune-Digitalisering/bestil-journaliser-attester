const Node = {
  "id": "f1b6568277c718eb",
  "type": "switch",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
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
  "x": 1040,
  "y": 360,
  "wires": [
    [
      "56baaafcc48de251"
    ],
    [
      "5227ac337c021bea",
      "947f0db4759c6e58"
    ]
  ]
}

module.exports = Node;