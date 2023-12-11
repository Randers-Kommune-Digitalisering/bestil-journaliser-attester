const Node = {
  "id": "901690ce94c558ce",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Sæt modtager \\n og overskrift",
  "rules": [
    {
      "t": "set",
      "p": "to",
      "pt": "msg",
      "to": "Soren.Langbo.Sloto.Thomassen@randers.dk",
      "tot": "str"
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
  "x": 360,
  "y": 1820,
  "wires": [
    [
      "3add1b775cbd9ecb"
    ]
  ],
  "_order": 126
}

module.exports = Node;