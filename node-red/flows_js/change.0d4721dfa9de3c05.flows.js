const Node = {
  "id": "0d4721dfa9de3c05",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Sæt fejlbesked",
  "rules": [
    {
      "t": "set",
      "p": "error",
      "pt": "msg",
      "to": "{\"error\":\"Ukendt afsender\",\"message\":\"Der blev modtaget en mail, men afsender er ikke signflow.\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 360,
  "wires": [
    [
      "e8e4d35dfa279f7a"
    ]
  ]
}

module.exports = Node;