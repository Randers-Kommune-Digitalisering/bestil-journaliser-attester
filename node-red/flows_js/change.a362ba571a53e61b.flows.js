const Node = {
  "id": "a362ba571a53e61b",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
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
  "x": 2460,
  "y": 1000,
  "wires": [
    [
      "cf3debb27fdfd57a"
    ]
  ]
}

module.exports = Node;