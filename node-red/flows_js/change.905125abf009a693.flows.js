const Node = {
  "id": "905125abf009a693",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "rekvisition.rekvirentEmail",
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
  "x": 2540,
  "y": 1140,
  "wires": [
    [
      "024c6c984ea1d366",
      "34842afb9216188b"
    ]
  ]
}

module.exports = Node;