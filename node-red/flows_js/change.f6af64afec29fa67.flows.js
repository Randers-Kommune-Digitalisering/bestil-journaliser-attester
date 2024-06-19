const Node = {
  "id": "f6af64afec29fa67",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "523d0378016cfbec",
  "name": "Set metric is_available",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "error ~> $exists() ? 0 : 1",
      "tot": "jsonata"
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
  "x": 870,
  "y": 300,
  "wires": [
    [
      "383eba8fd5fb27ef"
    ]
  ]
}

module.exports = Node;