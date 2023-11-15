const Node = {
  "id": "1a2aa96596f99911",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Find sagsbehandler",
  "rules": [
    {
      "t": "set",
      "p": "sagsbehandler",
      "pt": "msg",
      "to": "(( payload[$ ~> $contains(\"Att\")]\t\t~> $split(\",\") )[1]\t~> $split(\"<\") )[0]\t~> $trim()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 410,
  "y": 400,
  "wires": [
    [
      "5dd8dcc0c8987f55"
    ]
  ],
  "_order": 14
}

module.exports = Node;