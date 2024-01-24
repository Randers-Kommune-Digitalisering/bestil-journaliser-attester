const Node = {
  "id": "a0808b9ddfdd3d55",
  "type": "change",
  "z": "812b69015d6703b6",
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
  "x": 340,
  "y": 640,
  "wires": [
    [
      "908ccea6744adde3"
    ]
  ]
}

module.exports = Node;