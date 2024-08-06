const Node = {
  "id": "6c7576b71fa481d9",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"target\": target,\t        \"status\": status ~> $exists() ? status : statusCode\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 260,
  "wires": [
    [
      "fc0c9347ab4180c9",
      "6d638e23b6158715"
    ]
  ]
}

module.exports = Node;