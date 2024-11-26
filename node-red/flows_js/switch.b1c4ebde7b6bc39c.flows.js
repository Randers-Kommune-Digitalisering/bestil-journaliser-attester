const Node = {
  "id": "b1c4ebde7b6bc39c",
  "type": "switch",
  "z": "da7be20cd0c704b6",
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
  "x": 950,
  "y": 120,
  "wires": [
    [
      "3e8c553a0fc7abaf"
    ],
    [
      "854865cfde5f2abc"
    ]
  ]
}

module.exports = Node;