const Node = {
  "id": "68b3d4e53cac0332",
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
  "y": 880,
  "wires": [
    [
      "1a09c117ed693fe9"
    ],
    [
      "6626825df172f274"
    ]
  ]
}

module.exports = Node;