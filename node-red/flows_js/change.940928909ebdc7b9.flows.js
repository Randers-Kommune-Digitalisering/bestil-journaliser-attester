const Node = {
  "id": "940928909ebdc7b9",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"target\": target,\t        \"status_code\": status_code ~> $exists() ? status_code : statusCode\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 770,
  "y": 780,
  "wires": [
    [
      "3add141ab15d67a7",
      "8c1adfd0ed4f3523"
    ]
  ]
}

module.exports = Node;