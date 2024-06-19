const Node = {
  "id": "59e14b9f69d2fec6",
  "type": "change",
  "z": "797d31130fc2a555",
  "d": true,
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
  "x": 440,
  "y": 160,
  "wires": [
    [
      "1e7ebc746cf38773"
    ]
  ]
}

module.exports = Node;