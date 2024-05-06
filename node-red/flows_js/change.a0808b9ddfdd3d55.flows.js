const Node = {
  "id": "a0808b9ddfdd3d55",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "7aebfedb0f520e44",
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
      "to": "Din bestilling af attest er blevet afvist",
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
  "x": 240,
  "y": 880,
  "wires": [
    [
      "908ccea6744adde3"
    ]
  ]
}

module.exports = Node;