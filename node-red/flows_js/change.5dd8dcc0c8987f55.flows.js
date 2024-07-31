const Node = {
  "id": "5dd8dcc0c8987f55",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
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
  "x": 440,
  "y": 920,
  "wires": [
    [
      "8ef59cc3770c0d4c"
    ]
  ]
}

module.exports = Node;