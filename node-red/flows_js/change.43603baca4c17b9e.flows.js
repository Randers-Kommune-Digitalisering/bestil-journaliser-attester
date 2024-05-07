const Node = {
  "id": "43603baca4c17b9e",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "c162852c69a50777",
  "name": "Sæt modtager \\n og mail-krop",
  "rules": [
    {
      "t": "set",
      "p": "to",
      "pt": "msg",
      "to": "MAIL_HOVEDPOST",
      "tot": "env",
      "dc": true
    },
    {
      "t": "delete",
      "p": "from",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "description",
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
  "x": 240,
  "y": 1080,
  "wires": [
    [
      "1bc301b2666dea69",
      "7a230f0c71dff001"
    ]
  ]
}

module.exports = Node;