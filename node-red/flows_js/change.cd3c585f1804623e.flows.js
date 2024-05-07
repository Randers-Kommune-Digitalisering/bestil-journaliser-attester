const Node = {
  "id": "cd3c585f1804623e",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Sæt fejlbesked",
  "rules": [
    {
      "t": "set",
      "p": "mailbody",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    },
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
  "x": 1060,
  "y": 160,
  "wires": [
    [
      "16245bab475b9515"
    ]
  ]
}

module.exports = Node;