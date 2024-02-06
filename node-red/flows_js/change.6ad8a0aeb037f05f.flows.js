const Node = {
  "id": "6ad8a0aeb037f05f",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "2d0458ee6b467f9b",
  "name": "Sæt attest",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "attachments[0].content",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 730,
  "y": 1900,
  "wires": [
    [
      "f7bcbe671cbfeffd"
    ]
  ]
}

module.exports = Node;