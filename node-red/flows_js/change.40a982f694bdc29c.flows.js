const Node = {
  "id": "40a982f694bdc29c",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "cf5fc001c060884c",
  "name": "Sæt mail krop",
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
      "to": "{\t    \"to\": to,\t    \"subject\": topic,\t    \"attachments\": erAfvist or attestErRen or to = $env(\"MAIL_HR\") ? attachments,\t    \"from\": from\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "text ~> $exists() ? text ~> $replace(\"\\n\", \"<br />\") : html",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "text",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "html",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 100,
  "wires": [
    [
      "d16cfa80317185c5"
    ]
  ]
}

module.exports = Node;