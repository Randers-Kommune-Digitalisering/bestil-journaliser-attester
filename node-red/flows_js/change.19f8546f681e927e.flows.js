const Node = {
  "id": "19f8546f681e927e",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "a8e724864b221278",
  "name": "Set metric job_duration_s",
  "rules": [
    {
      "t": "set",
      "p": "job_name",
      "pt": "msg",
      "to": "bestil",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "error ~> $exists() ? \"error\" :\tpayload.warningCount > 0 ? \"warning\" : \t\"success\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "($millis() - ($flowContext(\"job_started\"))) / 1000",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1090,
  "y": 1820,
  "wires": [
    [
      "2b2c5c30237d58de"
    ]
  ]
}

module.exports = Node;