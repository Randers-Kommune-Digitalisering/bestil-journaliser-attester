const Node = {
  "id": "564a04515fb5715a",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "1a8741cda7ac048d",
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
      "to": "error",
      "tot": "str"
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
  "x": 930,
  "y": 1720,
  "wires": [
    [
      "735b2af2455d7e5a"
    ]
  ]
}

module.exports = Node;