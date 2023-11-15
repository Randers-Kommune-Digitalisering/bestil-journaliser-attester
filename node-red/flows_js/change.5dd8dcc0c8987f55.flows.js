const Node = {
  "id": "5dd8dcc0c8987f55",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Find ny medarbejder",
  "rules": [
    {
      "t": "set",
      "p": "medarbejder",
      "pt": "msg",
      "to": "( payload[$ ~> $contains(\"CPR\")]\t\t~> $split(\":\") )[1]\t~> $trim()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 660,
  "y": 440,
  "wires": [
    [
      "8c9ab9cb40cc6c28"
    ]
  ],
  "_order": 8
}

module.exports = Node;