const Node = {
  "id": "aafe94e046e69991",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "d8880c2ab63ce3cd",
  "name": "Sæt msg.bestilling \\n & msg.tablename",
  "rules": [
    {
      "t": "set",
      "p": "bestilling",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "bestillinger",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 1700,
  "wires": [
    [
      "8af784daa6359b34"
    ]
  ]
}

module.exports = Node;