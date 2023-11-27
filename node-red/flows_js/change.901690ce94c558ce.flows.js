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
      "to": "sagsbehandler",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "topic",
      "pt": "msg",
      "to": "Attest journaliseret på personalesag",
      "tot": "str"
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
  "_order": 71
}

module.exports = Node;