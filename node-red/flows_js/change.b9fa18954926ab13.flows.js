const Node = {
  "id": "b9fa18954926ab13",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload.description",
      "pt": "msg",
      "to": "payload.description ~> $exists() = false ? \"Ukendt årsag.\" : payload.description",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "beskrivelse",
      "pt": "msg",
      "to": "payload.description",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 445,
  "y": 980,
  "wires": [
    [
      "ec91e2f120cc1ea8"
    ]
  ],
  "l": false
}

module.exports = Node;