const Node = {
  "id": "b8348b6c73f3a3b7",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Sæt rekvisition",
  "rules": [
    {
      "t": "set",
      "p": "rekvisition",
      "pt": "msg",
      "to": "payload[0]",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 280,
  "y": 1060,
  "wires": [
    [
      "8999dd7c37c527b7"
    ]
  ]
}

module.exports = Node;