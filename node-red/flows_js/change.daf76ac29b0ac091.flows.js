const Node = {
  "id": "daf76ac29b0ac091",
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
  "x": 940,
  "y": 1120,
  "wires": [
    [
      "da2bee4d704a3668"
    ]
  ]
}

module.exports = Node;