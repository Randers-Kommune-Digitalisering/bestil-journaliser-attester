const Node = {
  "id": "901690ce94c558ce",
  "type": "change",
  "z": "812b69015d6703b6",
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
      "to": "Attest journaliseret på personalesag",
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
  "x": 320,
  "y": 380,
  "wires": [
    [
      "6c39b38654601ca1"
    ]
  ]
}

module.exports = Node;