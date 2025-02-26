const Node = {
  "id": "50454fb90696fe86",
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
      "to": "Bestilling af en attest er blevet afvist",
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
  "y": 520,
  "wires": [
    [
      "21451db13d0e2ffc"
    ]
  ]
}

module.exports = Node;