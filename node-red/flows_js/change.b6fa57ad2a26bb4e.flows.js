const Node = {
  "id": "b6fa57ad2a26bb4e",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "38c43765fdc8e29d",
  "name": "Flyt PDF til payload",
  "rules": [
    {
      "t": "move",
      "p": "attachments[0].content",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 210,
  "y": 400,
  "wires": [
    [
      "59e14b9f69d2fec6"
    ]
  ]
}

module.exports = Node;