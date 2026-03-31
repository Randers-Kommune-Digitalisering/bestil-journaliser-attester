const Node = {
  "id": "0be359cb0b52be69",
  "type": "switch",
  "z": "da7be20cd0c704b6",
  "name": "",
  "property": "payload[0].rekvirentEmail",
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
  "x": 590,
  "y": 780,
  "wires": [
    [
      "ed191ae35c73f1f0"
    ],
    [
      "ce189cc1ff5a88ef"
    ]
  ]
}

module.exports = Node;