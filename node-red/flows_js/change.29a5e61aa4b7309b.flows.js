const Node = {
  "id": "29a5e61aa4b7309b",
  "type": "change",
  "z": "d35ec07551c9897c",
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
      "5753eb08865bd451"
    ]
  ]
}

module.exports = Node;