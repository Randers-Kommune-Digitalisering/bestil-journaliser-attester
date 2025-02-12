const Node = {
  "id": "f02e3d3ab1bc4f2c",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "name": "set msg.dqs + msg.rekvisition",
  "rules": [
    {
      "t": "set",
      "p": "dqs",
      "pt": "msg",
      "to": "payload.rekvirentDQ ~> $distinct()",
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
      "to": "dqs",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 730,
  "y": 120,
  "wires": [
    [
      "b1c4ebde7b6bc39c",
      "b167731cf99135a5"
    ]
  ]
}

module.exports = Node;