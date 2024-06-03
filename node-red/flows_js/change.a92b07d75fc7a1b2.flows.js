const Node = {
  "id": "a92b07d75fc7a1b2",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": payload,\t    \"labels\": {\t        \"job_name\": job_name,\t        \"status\": status\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 780,
  "wires": [
    [
      "0aa47a86f5e835d6",
      "dac03520914831a1"
    ]
  ]
}

module.exports = Node;