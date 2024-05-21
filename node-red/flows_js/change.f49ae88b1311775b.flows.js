const Node = {
  "id": "f49ae88b1311775b",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "958f6aed62b11b69",
  "name": "Formatér HTML",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "description",
      "tot": "msg"
    },
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
  "x": 980,
  "y": 1300,
  "wires": [
    [
      "32bf09d50173ed34"
    ]
  ]
}

module.exports = Node;