const Node = {
  "id": "524e86403e722012",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "name": "Get stored token",
  "rules": [
    {
      "t": "set",
      "p": "token",
      "pt": "msg",
      "to": "token",
      "tot": "global"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 1380,
  "wires": [
    [
      "3c4099c5dbd9c39a"
    ]
  ]
}

module.exports = Node;