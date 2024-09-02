const Node = {
  "id": "53bcbbaca27af5ed",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "g": "3bd955d7047b4f43",
  "name": "Set metric job_duration_s",
  "rules": [
    {
      "t": "set",
      "p": "job_name",
      "pt": "msg",
      "to": "sd_download",
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
  "x": 1170,
  "y": 600,
  "wires": [
    [
      "15b2db9422a7db10"
    ]
  ]
}

module.exports = Node;