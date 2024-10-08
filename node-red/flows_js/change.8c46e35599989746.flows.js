const Node = {
  "id": "8c46e35599989746",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "9160d58a4a4565ba",
  "name": "Sæt modtager \\n og overskrift",
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
      "p": "topic",
      "pt": "msg",
      "to": "Din bestilling af attest er udløbet",
      "tot": "str"
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
  "x": 700,
  "y": 1320,
  "wires": [
    [
      "010bbe211842d0b2"
    ]
  ]
}

module.exports = Node;