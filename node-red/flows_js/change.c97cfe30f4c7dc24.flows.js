const Node = {
  "id": "c97cfe30f4c7dc24",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "g": "3bd955d7047b4f43",
  "name": "Set metric job_complete",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1170,
  "y": 560,
  "wires": [
    [
      "230aa3bcdd8360e5"
    ]
  ]
}

module.exports = Node;