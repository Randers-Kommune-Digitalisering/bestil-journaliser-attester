const Node = {
  "id": "5dd8dcc0c8987f55",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "Find rekvisitus",
  "rules": [
    {
      "t": "set",
      "p": "rekvisitus",
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
  "x": 460,
  "y": 380,
  "wires": [
    [
      "50ef0cb1a829a484"
    ]
  ]
}

module.exports = Node;