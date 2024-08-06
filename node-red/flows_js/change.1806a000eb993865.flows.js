const Node = {
  "id": "1806a000eb993865",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 580,
  "wires": [
    [
      "c10b237e39073a49",
      "f0e36b42914f0791"
    ]
  ]
}

module.exports = Node;