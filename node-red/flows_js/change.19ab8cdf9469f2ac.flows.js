const Node = {
  "id": "19ab8cdf9469f2ac",
  "type": "change",
  "z": "da53ba55e6b4ce3b",
  "g": "fca31927c1a07325",
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
  "y": 260,
  "wires": [
    [
      "c37071d4867d8114"
    ]
  ]
}

module.exports = Node;