const Node = {
  "id": "501d38644a77ae23",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "38c43765fdc8e29d",
  "name": "Læs tekst",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.t @ $t . \t(\t    $t != \"\" ?\t        $t\t) ~> $join(\" \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 820,
  "y": 660,
  "wires": [
    [
      "f07c60c9a0d22c46"
    ]
  ]
}

module.exports = Node;