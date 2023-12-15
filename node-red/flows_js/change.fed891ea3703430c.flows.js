const Node = {
  "id": "fed891ea3703430c",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "9e73796625eb7a3f",
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
  "y": 380,
  "wires": [
    [
      "1a2aa96596f99911"
    ]
  ],
  "_order": 103
}

module.exports = Node;