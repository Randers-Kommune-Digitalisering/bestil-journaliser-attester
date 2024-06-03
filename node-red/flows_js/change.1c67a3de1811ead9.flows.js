const Node = {
  "id": "1c67a3de1811ead9",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "e3ae7033cb5f43a3",
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
  "x": 1320,
  "y": 2660,
  "wires": [
    [
      "33a8b7e5d33bac22"
    ]
  ]
}

module.exports = Node;