const Node = {
  "id": "057b0180531be07c",
  "type": "change",
  "z": "e32afdd69abf0697",
  "d": true,
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": payload,\t    \"labels\": {\t        \"status\": status,\t        \"table_name\": table_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 770,
  "y": 360,
  "wires": [
    [
      "798f9a4fe8aee2a8",
      "8f80ec43f624dce9"
    ]
  ]
}

module.exports = Node;