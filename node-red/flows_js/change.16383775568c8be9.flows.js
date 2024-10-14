const Node = {
  "id": "16383775568c8be9",
  "type": "change",
  "z": "3f3959fd24bb612e",
  "name": "set msg.uids + msg.data",
  "rules": [
    {
      "t": "set",
      "p": "uids",
      "pt": "msg",
      "to": "payload.uid",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 910,
  "y": 180,
  "wires": [
    [
      "f8150dcba3e08efc"
    ]
  ]
}

module.exports = Node;