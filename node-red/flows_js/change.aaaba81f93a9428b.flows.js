const Node = {
  "id": "aaaba81f93a9428b",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "rekvirent",
      "pt": "msg",
      "to": "payload[0].rekvirentEmail",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 380,
  "wires": [
    [
      "8459f927e0b6c84c",
      "da59f72840f77396",
      "8c9ab9cb40cc6c28"
    ]
  ]
}

module.exports = Node;