const Node = {
  "id": "8e82ccceb36f3539",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Success = true",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{ \"success\": true }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 300,
  "wires": [
    [
      "2e6b0606eab4568c"
    ]
  ]
}

module.exports = Node;