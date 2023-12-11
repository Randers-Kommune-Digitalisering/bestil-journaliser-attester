const Node = {
  "id": "1a2aa96596f99911",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "9e73796625eb7a3f",
  "name": "Find sagsbehandler",
  "rules": [
    {
      "t": "set",
      "p": "sagsbehandler",
      "pt": "msg",
      "to": "(\t    /* Find randers mail, og opdel tekstfelt før @randers.dk */\t    $textField := payload[$ ~> $contains(\"@randers.dk\")]\t    ~> $substringBefore(\"@randers.dk\")\t    ~> $split(\" \");\t\t    /* Find længde på opdelt tekstfelt */\t    $arrayLength := $textField ~> $count();\t\t    /* Find mail-adresse (sidst i array) og tilføj domæne */\t    $textField [ $arrayLength-1 ] & \"@randers.dk\"\t)\t",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 450,
  "y": 380,
  "wires": [
    [
      "5dd8dcc0c8987f55"
    ]
  ],
  "_order": 85
}

module.exports = Node;