const Node = {
  "id": "d4a9d98f17c1a2c9",
  "type": "switch",
  "z": "971a7ae6df987a48",
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
  "y": 100,
  "wires": [
    [
      "34440912b7cbdbf0",
      "41e8ec7d61451645"
    ],
    [
      "231d5d7fa465545f"
    ]
  ],
  "_order": 29
}

module.exports = Node;