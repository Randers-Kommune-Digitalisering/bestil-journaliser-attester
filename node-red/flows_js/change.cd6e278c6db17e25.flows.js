const Node = {
  "id": "cd6e278c6db17e25",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "cd103be25bfed5cd",
  "name": "SD Auth",
  "rules": [
    {
      "t": "set",
      "p": "sdUser",
      "pt": "msg",
      "to": "SD_USER",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "sdPass",
      "pt": "msg",
      "to": "SD_PASS",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 1040,
  "wires": [
    [
      "fa1857186bec16c8"
    ]
  ]
}

module.exports = Node;