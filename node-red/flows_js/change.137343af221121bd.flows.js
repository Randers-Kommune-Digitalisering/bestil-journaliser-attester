const Node = {
  "id": "137343af221121bd",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Parametre",
  "rules": [
    {
      "t": "set",
      "p": "attestType",
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
  "x": 430,
  "y": 260,
  "wires": [
    [
      "54e25a536e5bf014"
    ]
  ]
}

module.exports = Node;