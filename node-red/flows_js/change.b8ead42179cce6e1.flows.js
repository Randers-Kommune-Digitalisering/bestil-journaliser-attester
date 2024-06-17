const Node = {
  "id": "b8ead42179cce6e1",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "name": "set msg.tablename",
  "rules": [
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "roller",
      "tot": "str"
    },
    {
      "t": "delete",
      "p": "error",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 440,
  "wires": [
    [
      "35b3745ce40e7de4"
    ]
  ]
}

module.exports = Node;