const Node = {
  "id": "c26611da1b48072b",
  "type": "switch",
  "z": "7599a14e87e1d5c4",
  "name": "",
  "property": "rekvisition.cpr",
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
  "x": 1010,
  "y": 100,
  "wires": [
    [
      "7a1c635f2bb1d4ad"
    ],
    [
      "d1e00f54dc5ff92b"
    ]
  ]
}

module.exports = Node;