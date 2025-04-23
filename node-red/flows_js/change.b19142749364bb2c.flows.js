const Node = {
  "id": "b19142749364bb2c",
  "type": "change",
  "z": "7599a14e87e1d5c4",
  "g": "044d9f3b18e135a4",
  "name": "Set metric job_duration_s",
  "rules": [
    {
      "t": "set",
      "p": "job_name",
      "pt": "msg",
      "to": "journaliser",
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
      "to": "($millis() - ($globalContext(\"job_started\"))) / 1000",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1370,
  "y": 1520,
  "wires": [
    [
      "d1afb6cf066663ea"
    ]
  ]
}

module.exports = Node;