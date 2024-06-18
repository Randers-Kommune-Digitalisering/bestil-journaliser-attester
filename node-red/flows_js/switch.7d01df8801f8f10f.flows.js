const Node = {
  "id": "7d01df8801f8f10f",
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
  "x": 1060,
  "y": 680,
  "wires": [
    [
      "16e94e23e1c09ce7"
    ],
    [
      "da1e6c561a44c5ce",
      "4a7cd38f24980d97"
    ]
  ]
}

module.exports = Node;