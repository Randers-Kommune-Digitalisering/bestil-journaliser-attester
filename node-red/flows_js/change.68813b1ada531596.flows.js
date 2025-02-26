const Node = {
  "id": "68813b1ada531596",
  "type": "change",
  "z": "bb3c27172f633c4a",
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
  "x": 380,
  "y": 80,
  "wires": [
    [
      "c4ddc72e105ce5dc"
    ]
  ]
}

module.exports = Node;