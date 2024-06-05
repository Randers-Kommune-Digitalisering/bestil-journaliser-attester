const Node = {
  "id": "6d1ce3701b876e21",
  "type": "change",
  "z": "da53ba55e6b4ce3b",
  "g": "c96baac73bbb5676",
  "name": "Set metric is_ready",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "error ~> $exists() ? 0 : 1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "error_type",
      "pt": "msg",
      "to": "error ~> $exists() ? \"dependency\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "job_name",
      "pt": "msg",
      "to": "bestil",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 570,
  "y": 480,
  "wires": [
    [
      "71a88396646a53a7"
    ]
  ]
}

module.exports = Node;