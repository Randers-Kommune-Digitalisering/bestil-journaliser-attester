const Node = {
  "id": "82153341d1c80bf4",
  "type": "change",
  "z": "bb3c27172f633c4a",
  "name": "Query params",
  "rules": [
    {
      "t": "set",
      "p": "today",
      "pt": "msg",
      "to": "$millis() ~> $fromMillis(\"[D01].[M01].[Y0001]\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "rekvisitus.cpr_sd",
      "pt": "msg",
      "to": "rekvisitus.cpr ~> $replace(\"-\", \"\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 80,
  "wires": [
    [
      "655fee06a2f86f58"
    ]
  ]
}

module.exports = Node;