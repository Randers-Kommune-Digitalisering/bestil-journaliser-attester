const Node = {
  "id": "9893c0468d1b5d27",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "a8f253aaafd8ccd1",
  "name": "Set metric mail_in",
  "rules": [
    {
      "t": "set",
      "p": "sender",
      "pt": "msg",
      "to": "from",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 240,
  "wires": [
    [
      "6111d247cd5c7634"
    ]
  ]
}

module.exports = Node;