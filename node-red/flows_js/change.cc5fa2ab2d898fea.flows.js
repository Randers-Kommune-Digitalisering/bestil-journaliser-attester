const Node = {
  "id": "cc5fa2ab2d898fea",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "3c5129bfe50adfad",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "bestilling.sagsbehandlerEmail",
      "pt": "msg",
      "to": "payload.value[0].mail",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1030,
  "y": 780,
  "wires": [
    [
      "886d10828d07d93a"
    ]
  ]
}

module.exports = Node;