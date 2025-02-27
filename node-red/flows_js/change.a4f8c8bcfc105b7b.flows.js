const Node = {
  "id": "a4f8c8bcfc105b7b",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Sæt fejlbesked\\n Ingen rekvisition",
  "rules": [
    {
      "t": "set",
      "p": "error",
      "pt": "msg",
      "to": "{\t   \"warning\": \"Ingen rekvisition\",\t   \"message\": \"Der blev modtaget en attest, men der findes ikke en tilsvarende rekvisition i systemet.\",\t   \"attestType\": attestTypeString & \" (\" & attestType & \")\",\t   \"rekvisitus\": rekvisitus\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1220,
  "y": 1440,
  "wires": [
    [
      "461970279c8fa295",
      "1dc7dcb5e4826e60"
    ]
  ]
}

module.exports = Node;