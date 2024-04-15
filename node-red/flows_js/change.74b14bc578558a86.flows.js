const Node = {
  "id": "74b14bc578558a86",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "erAfvist?",
  "rules": [
    {
      "t": "set",
      "p": "erAfvist",
      "pt": "msg",
      "to": "topic ~> $contains(\"Afslag\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 700,
  "wires": [
    [
      "2adb49165a458380"
    ]
  ]
}

module.exports = Node;