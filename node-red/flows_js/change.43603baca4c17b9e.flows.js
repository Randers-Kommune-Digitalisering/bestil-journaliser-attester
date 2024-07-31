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
      "p": "html",
      "pt": "msg",
      "to": "html ~> $exists() ? html",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "text",
      "pt": "msg",
      "to": "html ~> $exists() = false ? payload",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 1300,
  "wires": [
    [
      "1bc301b2666dea69",
      "5dec140724fb745d"
    ]
  ]
}

module.exports = Node;