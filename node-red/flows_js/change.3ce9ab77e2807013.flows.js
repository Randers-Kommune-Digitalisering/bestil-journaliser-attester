const Node = {
  "id": "3ce9ab77e2807013",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "7aebfedb0f520e44",
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
  "x": 760,
  "y": 900,
  "wires": [
    [
      "c67d83041b426bb9"
    ]
  ]
}

module.exports = Node;