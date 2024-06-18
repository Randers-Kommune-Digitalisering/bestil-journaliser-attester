const Node = {
  "id": "8fd1e4dfe3fefc28",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "aaf412de2154cc20",
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
  "x": 1330,
  "y": 260,
  "wires": [
    [
      "39987f2e4ca5bcc2"
    ]
  ]
}

module.exports = Node;