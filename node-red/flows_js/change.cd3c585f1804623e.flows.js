const Node = {
  "id": "cd3c585f1804623e",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Sæt fejlbesked",
  "rules": [
    {
      "t": "set",
      "p": "error",
      "pt": "msg",
      "to": "{\"error\":\"Ej en attest\",\"message\":\"Der blev modtaget en mail, men det er tilsyneladende ikke en attest.\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 320,
  "wires": [
    [
      "e8e4d35dfa279f7a"
    ]
  ]
}

module.exports = Node;