const Node = {
  "id": "ba8dd0f3e3352adf",
  "type": "change",
  "z": "7599a14e87e1d5c4",
  "g": "044d9f3b18e135a4",
  "name": "Set metric job_complete",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1370,
  "y": 1480,
  "wires": [
    [
      "87d8e0fd8883659e"
    ]
  ]
}

module.exports = Node;