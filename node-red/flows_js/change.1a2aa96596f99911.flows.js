const Node = {
  "id": "1a2aa96596f99911",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "d": true,
  "g": "bab02435ebea55f1",
  "name": "Find Randers-mail",
  "rules": [
    {
      "t": "set",
      "p": "mail",
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
  "y": 880,
  "wires": [
    []
  ]
}

module.exports = Node;