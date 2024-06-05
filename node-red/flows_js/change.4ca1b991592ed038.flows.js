const Node = {
  "id": "4ca1b991592ed038",
  "type": "change",
  "z": "e32afdd69abf0697",
  "name": "Metric",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"op\": \"set\",\t    \"val\": $millis()\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 360,
  "wires": [
    [
      "82f379e7f3be162c",
      "b126b754dd33a19f"
    ]
  ]
}

module.exports = Node;