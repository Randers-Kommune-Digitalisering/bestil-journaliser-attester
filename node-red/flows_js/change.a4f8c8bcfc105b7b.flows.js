const Node = {
  "id": "a4f8c8bcfc105b7b",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "error",
      "pt": "msg",
      "to": "{\"error\":\"Ingen rekvirent\",\"message\":\"Der blev modtaget en attest, men der findes ikke en tilsvarende bestilling i systemet.\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 580,
  "wires": [
    [
      "461970279c8fa295"
    ]
  ]
}

module.exports = Node;