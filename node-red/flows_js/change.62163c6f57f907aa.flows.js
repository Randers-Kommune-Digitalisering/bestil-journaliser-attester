const Node = {
  "id": "62163c6f57f907aa",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8d9d7a162d2628dd",
  "name": "Set metric is_ready",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "1",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "job_name",
      "pt": "msg",
      "to": "journaliser",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 80,
  "wires": [
    [
      "e775b1ff21ece8b1"
    ]
  ]
}

module.exports = Node;