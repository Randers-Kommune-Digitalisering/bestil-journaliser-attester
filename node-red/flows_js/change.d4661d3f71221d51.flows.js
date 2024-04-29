const Node = {
  "id": "d4661d3f71221d51",
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
    },
    {
      "t": "set",
      "p": "subType",
      "pt": "msg",
      "to": "req.params.subtype",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 380,
  "wires": [
    [
      "34e42e9b82583d3e",
      "c1289a74e2150d4e"
    ]
  ]
}

module.exports = Node;