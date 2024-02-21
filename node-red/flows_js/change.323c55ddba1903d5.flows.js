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
      "to": "rekvirent",
      "tot": "msg"
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
  "x": 320,
  "y": 160,
  "wires": [
    [
      "a2c0c7488b911eb8"
    ]
  ]
}

module.exports = Node;