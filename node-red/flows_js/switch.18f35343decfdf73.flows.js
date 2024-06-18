const Node = {
  "id": "18f35343decfdf73",
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
  "x": 1000,
  "y": 160,
  "wires": [
    [
      "9d073117d22dc27c"
    ],
    [
      "8ef8dd038f1af3e1"
    ]
  ]
}

module.exports = Node;