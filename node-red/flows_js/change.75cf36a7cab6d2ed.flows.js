const Node = {
  "id": "75cf36a7cab6d2ed",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"job_name\": job_name,\t        \"status\": status\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 680,
  "wires": [
    [
      "57c19511bcc117d8",
      "99e6bdb7e87cc4aa"
    ]
  ]
}

module.exports = Node;