const Node = {
  "id": "5dd8dcc0c8987f55",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "Find CPR",
  "rules": [
    {
      "t": "set",
      "p": "medarbejder",
      "pt": "msg",
      "to": "( payload[$ ~> $contains(\"CPR\")]\t\t~> $split(\":\") )[1]\t~> $trim()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 380,
  "wires": [
    [
      "fcab7f00482b77db"
    ]
  ]
}

module.exports = Node;