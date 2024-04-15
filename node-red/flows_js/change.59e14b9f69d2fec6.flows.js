const Node = {
  "id": "59e14b9f69d2fec6",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "Generér filnavn",
  "rules": [
    {
      "t": "set",
      "p": "filename",
      "pt": "msg",
      "to": "$millis() & \".pdf\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 520,
  "y": 820,
  "wires": [
    [
      "1e7ebc746cf38773"
    ]
  ]
}

module.exports = Node;