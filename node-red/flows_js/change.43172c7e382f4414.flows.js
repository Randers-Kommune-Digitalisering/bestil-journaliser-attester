const Node = {
  "id": "43172c7e382f4414",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "36761ede50c1f7fd",
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
      "to": "Attestrekvisition modtaget",
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
  "x": 200,
  "y": 1540,
  "wires": [
    [
      "b777a17b7f9dece3"
    ]
  ]
}

module.exports = Node;