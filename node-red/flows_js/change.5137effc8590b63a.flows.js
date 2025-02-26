const Node = {
  "id": "5137effc8590b63a",
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
      "to": "topic",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "mail.to",
      "pt": "msg",
      "to": "MAIL_HOVEDPOST",
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
      "p": "mail.body",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "mail.attachments",
      "pt": "msg",
      "to": "attachments",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 180,
  "y": 340,
  "wires": [
    [
      "5f4e4a95acf5805e",
      "359ccadf146e33ca",
      "e82742247a89732c"
    ]
  ]
}

module.exports = Node;