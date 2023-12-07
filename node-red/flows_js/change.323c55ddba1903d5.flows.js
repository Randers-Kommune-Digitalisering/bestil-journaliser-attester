const Node = {
  "id": "323c55ddba1903d5",
  "type": "change",
  "z": "971a7ae6df987a48",
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 360,
  "y": 1660,
  "wires": [
    [
      "54a496bee2f51a3c"
    ]
  ],
  "_order": 68
}

module.exports = Node;