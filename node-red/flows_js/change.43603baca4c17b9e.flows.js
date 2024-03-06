const Node = {
  "id": "43603baca4c17b9e",
  "type": "change",
  "z": "812b69015d6703b6",
  "name": "Sæt modtager \\n og mail-krop",
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
      "t": "delete",
      "p": "from",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "mailbody",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 320,
  "y": 1060,
  "wires": [
    [
      "1bc301b2666dea69",
      "5dec140724fb745d"
    ]
  ]
}

module.exports = Node;