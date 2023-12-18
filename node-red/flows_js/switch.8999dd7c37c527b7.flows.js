const Node = {
  "id": "8999dd7c37c527b7",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "9e73796625eb7a3f",
  "name": "Sagsbehandler findes?",
  "property": "sagsbehandler",
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
  "x": 260,
  "y": 560,
  "wires": [
    [
      "b985bd8c1549809a"
    ],
    [
      "5f544c6a5eb83a1a"
    ]
  ],
  "_order": 160
}

module.exports = Node;