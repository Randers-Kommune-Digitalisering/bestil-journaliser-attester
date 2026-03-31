const Node = {
  "id": "826b87d155a163df",
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
  "x": 1660,
  "y": 860,
  "wires": [
    [
      "9e486f4c4785e391"
    ]
  ]
}

module.exports = Node;