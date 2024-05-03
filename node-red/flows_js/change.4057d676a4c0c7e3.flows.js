const Node = {
  "id": "4057d676a4c0c7e3",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "38c43765fdc8e29d",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "attestErRen",
      "pt": "msg",
      "to": "true\tin\tpayload.t @ $text . (\t    $text ~> $contains(\"er ikke registreret med afgørelser\")\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 840,
  "y": 520,
  "wires": [
    [
      "4985cac5827ce15e"
    ]
  ]
}

module.exports = Node;