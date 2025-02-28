const Node = {
  "id": "0895376141b614f0",
  "type": "change",
  "z": "7599a14e87e1d5c4",
  "name": "Byg mail",
  "rules": [
    {
      "t": "set",
      "p": "mail",
      "pt": "msg",
      "to": "{}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "mail.title",
      "pt": "msg",
      "to": "Vedr. attestrekvisition",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "mail.to",
      "pt": "msg",
      "to": "MAIL_HR",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "mail.from",
      "pt": "msg",
      "to": "MAIL_THIS",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "mail.attachments",
      "pt": "msg",
      "to": "attachments",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 1240,
  "wires": [
    [
      "b85543fb44d33ffe"
    ]
  ]
}

module.exports = Node;