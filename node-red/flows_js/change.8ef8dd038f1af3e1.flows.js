const Node = {
  "id": "8ef8dd038f1af3e1",
  "type": "change",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
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
  "x": 1240,
  "y": 220,
  "wires": [
    [
      "1ce766ad948d5e0e"
    ]
  ]
}

module.exports = Node;