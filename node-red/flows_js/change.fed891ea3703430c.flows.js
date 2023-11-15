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
  "x": 220,
  "y": 560,
  "wires": [
    [
      "1a2aa96596f99911"
    ]
  ],
  "_order": 7
}

module.exports = Node;