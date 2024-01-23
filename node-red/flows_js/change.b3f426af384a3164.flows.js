const Node = {
  "id": "b3f426af384a3164",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "2d0458ee6b467f9b",
  "name": "Frasorter inaktive sager",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.Results [ SagsStatus.Navn = \"Aktiv\" ]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "count",
      "pt": "msg",
      "to": "payload ~> $count()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 1300,
  "wires": [
    [
      "8c34e618014b2972",
      "e9fb405205fa3be3"
    ]
  ]
}

module.exports = Node;