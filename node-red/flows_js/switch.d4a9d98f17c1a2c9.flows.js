const Node = {
  "id": "d4a9d98f17c1a2c9",
  "type": "switch",
  "z": "971a7ae6df987a48",
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
  "x": 440,
  "y": 140,
  "wires": [
    [
      "34440912b7cbdbf0"
    ],
    [
      "231d5d7fa465545f"
    ]
  ],
  "_order": 107
}

module.exports = Node;