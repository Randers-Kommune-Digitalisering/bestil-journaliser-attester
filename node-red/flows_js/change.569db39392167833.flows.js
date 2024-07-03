const Node = {
  "id": "569db39392167833",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "826ac4afb5a7dcfc",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "erAfvist",
      "pt": "msg",
      "to": "dqUser in payload.brugerDQ = false ? 1 : 0",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 920,
  "y": 1380,
  "wires": [
    [
      "67cb39dc298442e6"
    ]
  ]
}

module.exports = Node;