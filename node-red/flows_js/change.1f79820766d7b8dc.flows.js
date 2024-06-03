const Node = {
  "id": "1f79820766d7b8dc",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "e3ae7033cb5f43a3",
  "name": "Set metric is_ready",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "error ~> $exists() ? \"dependency\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "job_name",
      "pt": "msg",
      "to": "journaliser",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1310,
  "y": 2620,
  "wires": [
    [
      "890d8cb9dedb8abb"
    ]
  ]
}

module.exports = Node;