const Node = {
  "id": "93033cb340d22a2c",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload,\t    \"labels\": {\t        \"dependency_name\": dependency_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 260,
  "wires": [
    [
      "3e7eb9f75a9b0848",
      "44a1e5f7f94483e5"
    ]
  ]
}

module.exports = Node;