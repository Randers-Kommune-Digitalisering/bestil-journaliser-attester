const Node = {
  "id": "5dd8dcc0c8987f55",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "9e73796625eb7a3f",
  "name": "Find ny medarbejder",
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
  "x": 680,
  "y": 380,
  "wires": [
    [
      "8c9ab9cb40cc6c28",
      "da59f72840f77396",
      "8459f927e0b6c84c"
    ]
  ]
}

module.exports = Node;