const Node = {
  "id": "b88f13638108424b",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "bcccbfdff0935ac2",
  "name": "Set metric job_started",
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
      "p": "job_started",
      "pt": "flow",
      "to": "",
      "tot": "date"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 160,
  "wires": [
    [
      "3996177352c01a54"
    ]
  ]
}

module.exports = Node;