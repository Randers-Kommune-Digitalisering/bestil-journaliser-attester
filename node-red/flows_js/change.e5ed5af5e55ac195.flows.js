const Node = {
  "id": "e5ed5af5e55ac195",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "g": "af9be1f206f6f44b",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "payload ~> $empty() = false ? 'success' : 'error'",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1000,
  "y": 120,
  "wires": [
    [
      "2b4eca79ded14277"
    ]
  ]
}

module.exports = Node;