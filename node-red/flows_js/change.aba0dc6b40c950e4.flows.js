const Node = {
  "id": "aba0dc6b40c950e4",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": actionTime,\t    \"labels\": {\t        \"description\": actionDescription\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 240,
  "wires": [
    [
      "62fde1bc28126840",
      "4d165a6001de17fe"
    ]
  ]
}

module.exports = Node;