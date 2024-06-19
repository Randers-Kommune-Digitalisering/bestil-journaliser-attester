const Node = {
  "id": "c65c073052b2823c",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "aaf412de2154cc20",
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
  "x": 1260,
  "y": 300,
  "wires": [
    [
      "03bbb944e7f492d0"
    ]
  ]
}

module.exports = Node;