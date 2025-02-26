const Node = {
  "id": "9f17cf19f7d6e08b",
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
  "y": 1280,
  "wires": [
    [
      "8a70ec3bbb3467f8"
    ]
  ]
}

module.exports = Node;