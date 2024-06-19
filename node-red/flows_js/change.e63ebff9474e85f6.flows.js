const Node = {
  "id": "e63ebff9474e85f6",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "7faee95bc2535251",
  "name": "Set metric mail_out",
  "rules": [
    {
      "t": "set",
      "p": "recipient",
      "pt": "msg",
      "to": "to",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "status",
      "pt": "msg",
      "to": "(error ~> $exists()) ? \"error\" : \"success\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 750,
  "y": 240,
  "wires": [
    [
      "7dd62b5ba74bb531"
    ]
  ]
}

module.exports = Node;