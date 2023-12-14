const Node = {
  "id": "54a496bee2f51a3c",
  "type": "change",
  "z": "812b69015d6703b6",
  "name": "Vedhæft attest",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "description",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "description",
      "pt": "msg",
      "to": "description ~> $replace(\"<mailto:\", \" <\")",
      "tot": "jsonata"
    },
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
  "x": 620,
  "y": 160,
  "wires": [
    [
      "894558ccd508489d"
    ]
  ],
  "_order": 169
}

module.exports = Node;