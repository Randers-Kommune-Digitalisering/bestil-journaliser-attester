const Node = {
  "id": "9174d0b915630560",
  "type": "change",
  "z": "0ff39bfb9f284e88",
  "name": "24 timer",
  "rules": [
    {
      "t": "set",
      "p": "day_ago",
      "pt": "msg",
      "to": "($millis() + 86400000) ~> $fromMillis()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 320,
  "y": 80,
  "wires": [
    [
      "2d72038f62f4b744"
    ]
  ]
}

module.exports = Node;