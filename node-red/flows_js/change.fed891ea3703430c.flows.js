const Node = {
  "id": "fed891ea3703430c",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "Opdel mail",
  "rules": [
    {
      "t": "set",
      "p": "mailbody",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $split(\"\\n\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 250,
  "y": 380,
  "wires": [
    [
      "5dd8dcc0c8987f55"
    ]
  ]
}

module.exports = Node;