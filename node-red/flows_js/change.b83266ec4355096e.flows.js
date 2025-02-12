const Node = {
  "id": "b83266ec4355096e",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "g": "db929ae7e8b947e6",
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
      "p": "azure_token",
      "pt": "global",
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
  "x": 1000,
  "y": 360,
  "wires": [
    [
      "988d893e55f63001"
    ]
  ]
}

module.exports = Node;