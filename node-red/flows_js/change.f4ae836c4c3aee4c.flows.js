const Node = {
  "id": "f4ae836c4c3aee4c",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "38c43765fdc8e29d",
  "name": "set msg.attestType",
  "rules": [
    {
      "t": "set",
      "p": "attestType",
      "pt": "msg",
      "to": "true\tin\tpayload @ $text . (\t    $text ~> $lowercase() ~> $contains(\"offentlig straffeattest\")\t) ?\t0\t:\t\ttrue\tin\tpayload @ $text . (\t    $text ~> $lowercase() ~> $contains(\"privat straffeattest\")\t) ?\t1\t:\t\ttrue\tin\tpayload @ $text . (\t    $text ~> $lowercase() ~> $contains(\"børneattest\")\t) ?\t2\t\t:\t-1",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "attestType",
      "pt": "msg",
      "to": "attestType ~> $exists() ? attestType :\t\t    topic ~> $contains(\"Straffeatt.\") ? \t        [0, 1]\t        :\t    topic ~> $contains(\"Børneatt.\") ? \t        2",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "attestTypeString",
      "pt": "msg",
      "to": "($globalContext(\"attestTyper\"))[id = $$.attestType].name ~> $lowercase()",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 740,
  "wires": [
    [
      "62cadd55853415cc"
    ]
  ]
}

module.exports = Node;