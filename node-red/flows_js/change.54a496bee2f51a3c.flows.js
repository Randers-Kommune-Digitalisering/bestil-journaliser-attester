const Node = {
  "id": "54a496bee2f51a3c",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Vedhæft attest",
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
  "x": 580,
  "y": 1660,
  "wires": [
    [
      "894558ccd508489d"
    ]
  ],
  "_order": 81
}

module.exports = Node;