const Node = {
  "id": "8ba3ca77574d532f",
  "type": "change",
  "z": "c715449c21b1a61f",
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
  "x": 180,
  "y": 280,
  "wires": [
    [
      "a725715bc3cf2453"
    ]
  ],
  "_order": 77
}

module.exports = Node;