const Node = {
  "id": "f239742b69521d74",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "cd103be25bfed5cd",
  "name": "Query params",
  "rules": [
    {
      "t": "set",
      "p": "cpr",
      "pt": "msg",
      "to": "bestilling.rekvisitus ~> $replace(\"-\", \"\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "today",
      "pt": "msg",
      "to": "$millis() ~> $fromMillis(\"[D01].[M01].[Y0001]\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "https://service.sd.dk/sdws/services/GetPerson",
      "tot": "str"
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
      "5b03a5ab2ef7fdaa",
      "063fb7da7dbebe12"
    ]
  ]
}

module.exports = Node;