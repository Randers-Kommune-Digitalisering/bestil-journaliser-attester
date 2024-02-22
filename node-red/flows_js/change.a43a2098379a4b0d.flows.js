const Node = {
  "id": "a43a2098379a4b0d",
  "type": "change",
  "z": "90c6b0b502e346fa",
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
      "to": "$millis() + (payload.expires_in * 1000)",
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
  "x": 1100,
  "y": 1460,
  "wires": [
    [
      "efe052efd2efa6a0"
    ]
  ]
}

module.exports = Node;