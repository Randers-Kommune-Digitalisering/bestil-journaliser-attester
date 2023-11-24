const Node = {
  "id": "6ad8a0aeb037f05f",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Get file",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "attachments[0].content",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 760,
  "y": 1180,
  "wires": [
    [
      "f7bcbe671cbfeffd"
    ]
  ],
  "_order": 33
}

module.exports = Node;