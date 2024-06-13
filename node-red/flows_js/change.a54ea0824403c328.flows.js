const Node = {
  "id": "a54ea0824403c328",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "5759209171ce76be",
  "name": "Formatér HTML",
  "rules": [
    {
      "t": "set",
      "p": "plaintext",
      "pt": "msg",
      "to": "payload",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $replace(\"\\n\", \"<br>\")",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "description",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1220,
  "y": 480,
  "wires": [
    [
      "97448e03f6dc5e44"
    ]
  ]
}

module.exports = Node;