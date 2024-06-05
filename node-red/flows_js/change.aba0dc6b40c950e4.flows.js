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
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload,\t    \"labels\": {\t        \"job_name\": job_name,\t        \"error_type\": error_type != null ? error_type\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 160,
  "wires": [
    [
      "62fde1bc28126840",
      "4d165a6001de17fe"
    ]
  ]
}

module.exports = Node;