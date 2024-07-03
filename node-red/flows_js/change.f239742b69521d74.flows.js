const Node = {
  "id": "f239742b69521d74",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "ef51f47c59ef9c19",
  "name": "Query params",
  "rules": [
    {
      "t": "set",
      "p": "cpr",
      "pt": "msg",
      "to": "bestilling.rekvisitus",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "today",
      "pt": "msg",
      "to": "$millis() ~> $fromMillis(\"[D01].[M01].[Y0001]\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 1040,
  "wires": [
    [
      "5b03a5ab2ef7fdaa"
    ]
  ]
}

module.exports = Node;