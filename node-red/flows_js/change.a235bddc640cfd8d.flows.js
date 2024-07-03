const Node = {
  "id": "a235bddc640cfd8d",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "a8e724864b221278",
  "name": "Set metric job_complete",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1090,
  "y": 1780,
  "wires": [
    [
      "fc3b07fa23296d97"
    ]
  ]
}

module.exports = Node;