const Node = {
  "id": "323c55ddba1903d5",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "4faa8cefca4c99e9",
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
  "x": 200,
  "y": 720,
  "wires": [
    [
      "d7173d27d932b505"
    ]
  ]
}

module.exports = Node;