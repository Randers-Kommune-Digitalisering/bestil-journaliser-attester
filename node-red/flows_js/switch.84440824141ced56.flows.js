const Node = {
  "id": "84440824141ced56",
  "type": "switch",
  "z": "3f3959fd24bb612e",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "array",
      "vt": "array"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 450,
  "y": 480,
  "wires": [
    [
      "7589f1c34a0cf2b2"
    ],
    [
      "968c2e5d334f03b2"
    ]
  ]
}

module.exports = Node;