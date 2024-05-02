const Node = {
  "id": "74b14bc578558a86",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "38c43765fdc8e29d",
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
  "x": 1040,
  "y": 400,
  "wires": [
    [
      "ef3c2c1e44c49441"
    ]
  ]
}

module.exports = Node;