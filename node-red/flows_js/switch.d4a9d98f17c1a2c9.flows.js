const Node = {
  "id": "d4a9d98f17c1a2c9",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "d": true,
  "g": "7927b0d68211546e",
  "name": "Fra hovedpostkasse?",
  "property": "from",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "randers@randers.dk",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 420,
  "y": 140,
  "wires": [
    [
      "34440912b7cbdbf0"
    ],
    [
      "231d5d7fa465545f"
    ]
  ]
}

module.exports = Node;