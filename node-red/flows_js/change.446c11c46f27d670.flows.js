const Node = {
  "id": "446c11c46f27d670",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "name": "Sæt fejlbesked",
  "rules": [
    {
      "t": "set",
      "p": "error",
      "pt": "msg",
      "to": "{\"error\":\"Database fejl\",\"message\":\"Der opstod en fejl ved kommunikation med databasen.\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 680,
  "y": 2980,
  "wires": [
    [
      "af2ad12d30481a94"
    ]
  ]
}

module.exports = Node;