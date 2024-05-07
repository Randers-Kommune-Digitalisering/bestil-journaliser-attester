const Node = {
  "id": "066989e068dd5a78",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "958f6aed62b11b69",
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
  "x": 840,
  "y": 1280,
  "wires": [
    [
      "32bf09d50173ed34"
    ]
  ]
}

module.exports = Node;