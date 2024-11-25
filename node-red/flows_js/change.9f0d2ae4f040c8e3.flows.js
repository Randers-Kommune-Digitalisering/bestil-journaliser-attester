const Node = {
  "id": "9f0d2ae4f040c8e3",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
  "name": "Retrieve token",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "token",
      "tot": "flow",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1920,
  "y": 920,
  "wires": [
    [
      "280574e2b4cfed66"
    ]
  ]
}

module.exports = Node;