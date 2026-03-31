const Node = {
  "id": "996ad23c8457fc38",
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
      "to": "erJournaliseret ? 'Attest journaliseret på personalesag' : 'Attest klar til journalisering'",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "mail.to",
      "pt": "msg",
      "to": "rekvisition.rekvirentEmail",
      "tot": "msg"
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
      "to": "erJournaliseret ? [] : attachments",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 820,
  "wires": [
    [
      "c2df11daea7425b8"
    ]
  ]
}

module.exports = Node;