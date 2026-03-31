const Node = {
  "id": "8beb99cb14497038",
  "type": "switch",
  "z": "da7be20cd0c704b6",
  "name": "",
  "property": "rekvirentEmail",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 270,
  "y": 700,
  "wires": [
    [
      "6abb10770cedd892"
    ],
    [
      "3e0987c8d49c2c83"
    ]
  ]
}

module.exports = Node;