const Node = {
  "id": "5dd8dcc0c8987f55",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "Find rekvisitus (CPR)",
  "rules": [
    {
      "t": "set",
      "p": "rekvisitus",
      "pt": "msg",
      "to": "( payload[$ ~> $contains(\"CPR\")]\t\t~> $split(\":\") )[1]\t~> $trim()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "rekvisitus",
      "pt": "msg",
      "to": "rekvisitus ~> $contains(\"-\") ? rekvisitus :\t(\t    (rekvisitus ~> $substring(0, 6))\t    & \"-\" &\t    (rekvisitus ~> $substring(6, 10))\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 380,
  "wires": [
    [
      "a6cec01f2ab13499"
    ]
  ]
}

module.exports = Node;