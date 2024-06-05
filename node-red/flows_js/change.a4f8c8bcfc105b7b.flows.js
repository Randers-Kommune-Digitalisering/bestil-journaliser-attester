const Node = {
  "id": "a4f8c8bcfc105b7b",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Sæt fejlbesked",
  "rules": [
    {
      "t": "set",
      "p": "error",
      "pt": "msg",
      "to": "{\"error\":\"Ingen rekvisition\",\"message\":\"Der blev modtaget en attest, men der findes ikke en tilsvarende rekvisition i systemet.\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 1100,
  "wires": [
    [
      "461970279c8fa295"
    ]
  ]
}

module.exports = Node;