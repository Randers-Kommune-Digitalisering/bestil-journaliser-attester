const Node = {
  "id": "235ba9cffea32b80",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": requestStatus,\t    \"labels\": {\t        \"type\": requestType,\t        \"url\": requestURL\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 340,
  "wires": [
    [
      "4c280efcc3201be0",
      "747963f5fb18524e"
    ]
  ]
}

module.exports = Node;