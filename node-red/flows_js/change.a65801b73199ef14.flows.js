const Node = {
  "id": "a65801b73199ef14",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "set msg.id",
  "rules": [
    {
      "t": "set",
      "p": "id",
      "pt": "msg",
      "to": "req.params.id",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 1280,
  "wires": [
    [
      "ec91e2f120cc1ea8"
    ]
  ]
}

module.exports = Node;