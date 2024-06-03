const Node = {
  "id": "f341f45b2d531c44",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8d9d7a162d2628dd",
  "name": "Set metric is_available",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "1",
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
  "x": 400,
  "y": 240,
  "wires": [
    [
      "3f10ec048e3748d6"
    ]
  ]
}

module.exports = Node;