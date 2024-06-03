const Node = {
  "id": "5269862555fe2bb1",
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
  "y": 580,
  "wires": [
    [
      "02ee8d084de24852",
      "b34219ea06355d9a"
    ]
  ]
}

module.exports = Node;