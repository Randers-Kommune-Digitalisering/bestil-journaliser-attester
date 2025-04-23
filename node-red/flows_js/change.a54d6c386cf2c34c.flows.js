const Node = {
  "id": "a54d6c386cf2c34c",
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
  "x": 1120,
  "y": 860,
  "wires": [
    [
      "4ac0859268720334"
    ]
  ]
}

module.exports = Node;