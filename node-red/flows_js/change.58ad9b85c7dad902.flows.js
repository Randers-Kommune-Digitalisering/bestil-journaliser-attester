const Node = {
  "id": "58ad9b85c7dad902",
  "type": "change",
  "z": "7599a14e87e1d5c4",
  "name": "Tilføj tekst",
  "rules": [
    {
      "t": "set",
      "p": "mail.body",
      "pt": "msg",
      "to": "mail.body & mail_body_ext",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1340,
  "y": 920,
  "wires": [
    [
      "6fa5dd91758fd988"
    ]
  ]
}

module.exports = Node;