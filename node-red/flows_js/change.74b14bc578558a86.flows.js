const Node = {
  "id": "74b14bc578558a86",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "38c43765fdc8e29d",
  "name": "Sæt erAfvist",
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
  "x": 430,
  "y": 560,
  "wires": [
    [
      "579e2b301cfbbe0c"
    ]
  ]
}

module.exports = Node;