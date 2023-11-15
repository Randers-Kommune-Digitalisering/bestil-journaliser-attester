const Node = {
  "id": "72ebddae5d339f3a",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Set global token",
  "rules": [
    {
      "t": "set",
      "p": "token",
      "pt": "global",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "token.access_token",
      "pt": "global",
      "to": "payload.access_token",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "token.expires_at",
      "pt": "global",
      "to": "$millis() + payload.expires_in",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "token",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1080,
  "y": 720,
  "wires": [
    [
      "24fdf91f0599cc5f"
    ]
  ],
  "_order": 22
}

module.exports = Node;