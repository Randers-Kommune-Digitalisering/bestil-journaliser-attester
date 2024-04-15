const Node = {
  "id": "323c55ddba1903d5",
  "type": "change",
  "z": "812b69015d6703b6",
  "name": "Sæt modtager",
  "rules": [
    {
      "t": "set",
      "p": "to",
      "pt": "msg",
      "to": "rekvirent",
      "tot": "msg"
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
  "x": 320,
  "y": 500,
  "wires": [
    [
      "2b3d38992089c1f9"
    ]
  ]
}

module.exports = Node;