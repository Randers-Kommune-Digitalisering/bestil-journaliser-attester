const Node = {
  "id": "80a57b2ddf8ca4fc",
  "type": "change",
  "z": "ed8da944366aaffa",
  "name": "Retrieve token",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "cpr_token",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 80,
  "wires": [
    [
      "a5d4e33d280946f4"
    ]
  ]
}

module.exports = Node;