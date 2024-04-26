const Node = {
  "id": "a6cec01f2ab13499",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "Bestem attest type",
  "rules": [
    {
      "t": "set",
      "p": "attestType",
      "pt": "msg",
      "to": "topic ~> $contains(\"Straffeatt.\") ? \t    [0, 1]\t    :\ttopic ~> $contains(\"Børneatt.\") ? \t    2",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "attestTypeClause",
      "pt": "msg",
      "to": "attestType @ $type . (\t     'attestType = ' & $type\t) ~> $join(\" OR \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 690,
  "y": 380,
  "wires": [
    [
      "50ef0cb1a829a484"
    ]
  ]
}

module.exports = Node;