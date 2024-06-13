const Node = {
  "id": "40a982f694bdc29c",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "cf5fc001c060884c",
  "name": "Parameters",
  "rules": [
    {
      "t": "set",
      "p": "from",
      "pt": "msg",
      "to": "MAIL_THIS",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "email",
      "pt": "msg",
      "to": "{\t    \"to\": to,\t    \"from\": from,\t    \"topic\": subject\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 370,
  "y": 100,
  "wires": [
    [
      "d16cfa80317185c5",
      "074b5c36544f29c4"
    ]
  ]
}

module.exports = Node;