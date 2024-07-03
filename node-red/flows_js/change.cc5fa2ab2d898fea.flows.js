const Node = {
  "id": "cc5fa2ab2d898fea",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "3c5129bfe50adfad",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "bestilling.rekvirentEmail",
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
  "x": 990,
  "y": 820,
  "wires": [
    [
      "f8e651e9c80a3529",
      "eac6a54c283e44dd",
      "1f5df82ba6361c94"
    ]
  ]
}

module.exports = Node;