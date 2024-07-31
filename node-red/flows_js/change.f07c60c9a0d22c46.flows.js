const Node = {
  "id": "f07c60c9a0d22c46",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "38c43765fdc8e29d",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "attestErRen",
      "pt": "msg",
      "to": "true\tin\tpayload @ $text . (\t    $text ~> $contains(\"er ikke registreret med afgørelser\")\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1100,
  "y": 620,
  "wires": [
    [
      "7b9330c5b66eea61"
    ]
  ]
}

module.exports = Node;