const Node = {
  "id": "6ae4226e83527024",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": isRunning ? 1 : 0\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 140,
  "wires": [
    [
      "f1229256841a296f",
      "0f5102ea65c501e6"
    ]
  ]
}

module.exports = Node;