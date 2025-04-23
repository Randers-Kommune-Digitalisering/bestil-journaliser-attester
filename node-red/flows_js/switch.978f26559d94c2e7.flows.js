const Node = {
  "id": "978f26559d94c2e7",
  "type": "switch",
  "z": "7599a14e87e1d5c4",
  "g": "5e3a8b5e70753001",
  "name": "",
  "property": "payload.success",
  "propertyType": "msg",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 190,
  "y": 1520,
  "wires": [
    [
      "8a636d46dfdaa0d8"
    ],
    [
      "8ca23c2fafc2c9e1"
    ]
  ]
}

module.exports = Node;