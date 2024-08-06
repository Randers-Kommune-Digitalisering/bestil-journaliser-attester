const Node = {
  "id": "37da382e89c7e01d",
  "type": "change",
  "z": "e32afdd69abf0697",
  "d": true,
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"inc\",\t    \"val\": 1,\t    \"labels\": {\t        \"status\": status,\t        \"table_name\": table_name\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1160,
  "y": 160,
  "wires": [
    [
      "40d02454a1656680",
      "209e606abfb64f77"
    ]
  ]
}

module.exports = Node;