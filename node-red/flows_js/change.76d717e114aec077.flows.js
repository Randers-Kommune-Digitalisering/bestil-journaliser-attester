const Node = {
  "id": "76d717e114aec077",
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
      "to": "Bestilling af en attest er udløbet",
      "tot": "str"
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 660,
  "wires": [
    [
      "9a88db9425486bc0"
    ]
  ]
}

module.exports = Node;