const Node = {
  "id": "c289754152d8f908",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload[0][\"COUNT(*)\"]",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 560,
  "wires": [
    [
      "147c40f2221f9b60"
    ]
  ]
}

module.exports = Node;