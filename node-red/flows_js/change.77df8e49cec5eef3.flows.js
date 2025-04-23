const Node = {
  "id": "77df8e49cec5eef3",
  "type": "change",
  "z": "ed8da944366aaffa",
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
      "p": "cpr_token",
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
  "x": 940,
  "y": 160,
  "wires": [
    [
      "07c661af791939d4"
    ]
  ]
}

module.exports = Node;