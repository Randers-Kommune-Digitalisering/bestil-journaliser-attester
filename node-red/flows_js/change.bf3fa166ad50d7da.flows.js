const Node = {
  "id": "bf3fa166ad50d7da",
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
  "x": 450,
  "y": 1120,
  "wires": [
    [
      "f5a50da9694a5ae3"
    ]
  ]
}

module.exports = Node;