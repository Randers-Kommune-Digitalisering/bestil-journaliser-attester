const Node = {
  "id": "323c55ddba1903d5",
  "type": "change",
  "z": "812b69015d6703b6",
  "name": "Sæt modtager \\n og filnavn",
  "rules": [
    {
      "t": "set",
      "p": "to",
      "pt": "msg",
      "to": "from",
      "tot": "msg",
      "dc": true
    },
    {
      "t": "set",
      "p": "filename",
      "pt": "msg",
      "to": "Attest.pdf",
      "tot": "str",
      "dc": true
    },
    {
      "t": "delete",
      "p": "from",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 160,
  "wires": [
    [
      "54a496bee2f51a3c"
    ]
  ],
  "_order": 158
}

module.exports = Node;