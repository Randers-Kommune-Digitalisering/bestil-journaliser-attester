const Node = {
  "id": "1ab76ac693fb3232",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "012ee3cd0590380d",
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
  "x": 1520,
  "y": 880,
  "wires": [
    [
      "e1ba169c57aac0f4"
    ]
  ]
}

module.exports = Node;