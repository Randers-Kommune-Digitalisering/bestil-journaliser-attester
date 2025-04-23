const Node = {
  "id": "74d11e5eddeb547b",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "name": "set msg.cprs + msg.rekvisition",
  "rules": [
    {
      "t": "set",
      "p": "cprs",
      "pt": "msg",
      "to": "payload.cpr ~> $distinct()",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "rekvisition",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "cprs",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 730,
  "y": 880,
  "wires": [
    [
      "68b3d4e53cac0332",
      "9669010dda2d59f7"
    ]
  ]
}

module.exports = Node;