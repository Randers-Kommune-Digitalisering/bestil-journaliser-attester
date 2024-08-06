const Node = {
  "id": "a8c8287c1cf56844",
  "type": "change",
  "z": "e32afdd69abf0697",
  "d": true,
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"status\": status,\t        \"table_name\": table_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1160,
  "y": 260,
  "wires": [
    [
      "b17b0a7d8b2a1652",
      "6802eb3b19cab174"
    ]
  ]
}

module.exports = Node;