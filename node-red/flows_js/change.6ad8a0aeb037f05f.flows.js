const Node = {
  "id": "6ad8a0aeb037f05f",
  "type": "change",
  "z": "90c6b0b502e346fa",
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
  "x": 610,
  "y": 2200,
  "wires": [
    [
      "865424cbe3ef7eb0"
    ]
  ]
}

module.exports = Node;