const Node = {
  "id": "b432e808d08e9484",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
  "name": "Find 08 Straffeattester",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload [ Titel = \"08 Straffeattester\" ]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "count",
      "pt": "msg",
      "to": "payload ~> $count()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 300,
  "y": 2200,
  "wires": [
    [
      "25352d7d7e445c40"
    ]
  ]
}

module.exports = Node;