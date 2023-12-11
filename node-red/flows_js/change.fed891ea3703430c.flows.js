const Node = {
  "id": "fed891ea3703430c",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Opdel mail body",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $split(\"\\n\")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 240,
  "y": 360,
  "wires": [
    [
      "1a2aa96596f99911"
    ]
  ],
  "_order": 74
}

module.exports = Node;