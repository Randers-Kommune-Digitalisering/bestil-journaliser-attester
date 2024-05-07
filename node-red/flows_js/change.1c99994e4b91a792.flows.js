const Node = {
  "id": "1c99994e4b91a792",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "c162852c69a50777",
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
  "x": 680,
  "y": 1100,
  "wires": [
    [
      "5dec140724fb745d"
    ]
  ]
}

module.exports = Node;