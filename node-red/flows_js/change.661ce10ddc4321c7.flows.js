const Node = {
  "id": "661ce10ddc4321c7",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "523d0378016cfbec",
  "name": "Set metric is_available",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "0",
      "tot": "num"
    },
    {
      "t": "set",
      "p": "dependency_name",
      "pt": "msg",
      "to": "mail",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 760,
  "y": 300,
  "wires": [
    [
      "383eba8fd5fb27ef"
    ]
  ]
}

module.exports = Node;