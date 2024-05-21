const Node = {
  "id": "9d477f1214dcf5e9",
  "type": "change",
  "z": "797d31130fc2a555",
  "name": "Sæt hasAttachment",
  "rules": [
    {
      "t": "set",
      "p": "hasAttachment",
      "pt": "msg",
      "to": "attachments[0].content ~> $exists()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 60,
  "wires": [
    [
      "950bd8c844f5b8ec"
    ]
  ]
}

module.exports = Node;