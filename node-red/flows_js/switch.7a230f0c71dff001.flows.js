const Node = {
  "id": "7a230f0c71dff001",
  "type": "switch",
  "z": "812b69015d6703b6",
  "g": "c162852c69a50777",
  "name": "",
  "property": "filename",
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
  "x": 470,
  "y": 1080,
  "wires": [
    [
      "75e3a4d518f569c2"
    ],
    [
      "087fb8409aaa2d44"
    ]
  ]
}

module.exports = Node;