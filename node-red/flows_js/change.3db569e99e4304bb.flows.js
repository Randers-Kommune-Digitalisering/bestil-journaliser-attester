const Node = {
  "id": "3db569e99e4304bb",
  "type": "change",
  "z": "752aedf8618e3123",
  "name": "Mail request",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"from\": mail.from,\t    \"to\": mail.to,\t    \"title\": mail.title,\t    \"body\": mail.body,\t    \"attachments\": mail.attachments\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "MAIL_SERVICE_URL",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 80,
  "wires": [
    [
      "4c81577cebd48b6f"
    ]
  ]
}

module.exports = Node;