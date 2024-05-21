const Node = {
  "id": "1d535a73534947c9",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "4faa8cefca4c99e9",
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
  "x": 1180,
  "y": 700,
  "wires": [
    [
      "32ccc814026d8e07"
    ]
  ]
}

module.exports = Node;