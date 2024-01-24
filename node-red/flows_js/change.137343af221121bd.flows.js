const Node = {
  "id": "137343af221121bd",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "set msg.type",
  "rules": [
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "req.params.type",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 300,
  "wires": [
    [
      "54e25a536e5bf014"
    ]
  ]
}

module.exports = Node;