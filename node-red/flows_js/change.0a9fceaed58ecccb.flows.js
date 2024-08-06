const Node = {
  "id": "0a9fceaed58ecccb",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 700,
  "wires": [
    [
      "b395f9473aa28917",
      "29e43e0debab7142"
    ]
  ]
}

module.exports = Node;