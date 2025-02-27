const Node = {
  "id": "446c11c46f27d670",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "name": "Sæt fejlbesked\\n Teknisk fejl",
  "rules": [
    {
      "t": "set",
      "p": "error",
      "pt": "msg",
      "to": "{    \"error\": \"Teknisk fejl\",    \"message\": \"Der opstod en teknisk fejl i flowet.\",    \"details\": error}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 700,
  "y": 3500,
  "wires": [
    [
      "af2ad12d30481a94",
      "d65c36cec95d9a1f"
    ]
  ]
}

module.exports = Node;