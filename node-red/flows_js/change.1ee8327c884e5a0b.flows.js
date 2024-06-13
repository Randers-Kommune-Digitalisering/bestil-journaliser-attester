const Node = {
  "id": "1ee8327c884e5a0b",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "958f6aed62b11b69",
  "name": "Sæt modtager \\n og overskrift",
  "rules": [
    {
      "t": "set",
      "p": "to",
      "pt": "msg",
      "to": "MAIL_HR",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "topic",
      "pt": "msg",
      "to": "Vedr. attestrekvisition",
      "tot": "str"
    },
    {
      "t": "delete",
      "p": "from",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 1300,
  "wires": [
    [
      "ccbe286585a87206"
    ]
  ]
}

module.exports = Node;