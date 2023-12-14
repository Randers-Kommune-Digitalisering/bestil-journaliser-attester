const Node = {
  "id": "5bf709063b12ec5c",
  "type": "change",
  "z": "c715449c21b1a61f",
  "name": "Set token",
  "rules": [
    {
      "t": "set",
      "p": "payload.expires_at",
      "pt": "msg",
      "to": "$millis() + ( payload.expires_in * 1000 )",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "token",
      "pt": "flow",
      "to": "payload",
      "tot": "msg",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 820,
  "wires": [
    [
      "9a4c52659edf4634"
    ]
  ],
  "_order": 89
}

module.exports = Node;