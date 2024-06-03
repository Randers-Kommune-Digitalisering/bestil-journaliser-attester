const Node = {
  "id": "8ba3ca77574d532f",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "f111898069b32afc",
  "name": "Flyt payload \\n til msg.bestilling",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "bestilling",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 380,
  "wires": [
    [
      "fe032d4971ec1df9"
    ]
  ]
}

module.exports = Node;