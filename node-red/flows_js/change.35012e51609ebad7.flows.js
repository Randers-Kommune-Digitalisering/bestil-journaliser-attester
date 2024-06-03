const Node = {
  "id": "35012e51609ebad7",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "fca31927c1a07325",
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
      "to": "db",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1160,
  "y": 340,
  "wires": [
    [
      "e10cdc4fca455992"
    ]
  ]
}

module.exports = Node;