const Node = {
  "id": "93d01421f25584ea",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "38c43765fdc8e29d",
  "name": "Sæt fejlbesked\\n Ingen attest vedhæftet",
  "rules": [
    {
      "t": "set",
      "p": "error",
      "pt": "msg",
      "to": "{\"warning\":\"Ingen attest vedhæftet\",\"message\":\"Der blev modtaget en mail som ligner en attestrekvisition, men der er ingen vedhæftet attest.\"}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 880,
  "y": 640,
  "wires": [
    [
      "d4ceacf7b61bc09c"
    ]
  ]
}

module.exports = Node;