const Node = {
  "id": "fed891ea3703430c",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Opdel mail",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "html",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $split(\"<br>\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 920,
  "wires": [
    [
      "5dd8dcc0c8987f55"
    ]
  ]
}

module.exports = Node;