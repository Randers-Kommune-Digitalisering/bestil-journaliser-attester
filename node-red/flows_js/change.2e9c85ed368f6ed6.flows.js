const Node = {
  "id": "2e9c85ed368f6ed6",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "1a8741cda7ac048d",
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
      "to": "error",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 810,
  "y": 1680,
  "wires": [
    [
      "185db8a976e690e3"
    ]
  ]
}

module.exports = Node;