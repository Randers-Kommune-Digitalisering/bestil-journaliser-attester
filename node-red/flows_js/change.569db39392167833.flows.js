const Node = {
  "id": "569db39392167833",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "826ac4afb5a7dcfc",
  "name": "Afvist?",
  "rules": [
    {
      "t": "set",
      "p": "erAfvist",
      "pt": "msg",
      "to": "dqUser in payload.brugerDQ = false ? 1 : 0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "afvistAt",
      "pt": "msg",
      "to": "erAfvist = 1 ? \"CURRENT_TIMESTAMP\" : \"\\\"0000-00-00 00:00:00\\\"\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 890,
  "y": 1280,
  "wires": [
    [
      "67cb39dc298442e6"
    ]
  ]
}

module.exports = Node;