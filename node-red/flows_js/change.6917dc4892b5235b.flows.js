const Node = {
  "id": "6917dc4892b5235b",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "join obj",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"warningCount\": payload.warningCount ~> $sum(),\t    \"error\": payload.error ~> $merge()\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 800,
  "y": 1800,
  "wires": [
    [
      "ed482cc4717d37d7",
      "74f27060fad25c11"
    ]
  ]
}

module.exports = Node;