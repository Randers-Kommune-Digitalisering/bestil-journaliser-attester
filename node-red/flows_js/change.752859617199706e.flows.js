const Node = {
  "id": "752859617199706e",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "04f707039c706219",
  "name": "Set metric job_started",
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
      "p": "job_started",
      "pt": "global",
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
  "y": 340,
  "wires": [
    [
      "a8a86f51bdb3b112"
    ]
  ]
}

module.exports = Node;