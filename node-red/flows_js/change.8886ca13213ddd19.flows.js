const Node = {
  "id": "8886ca13213ddd19",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "g": "db929ae7e8b947e6",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "rekvirentEmail",
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
  "x": 920,
  "y": 500,
  "wires": [
    [
      "9effb23184fe4d7f",
      "7893a7564fb605c1"
    ]
  ]
}

module.exports = Node;