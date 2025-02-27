const Node = {
  "id": "9b4a1dd9f5f34d60",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Sæt fejlbesked\\n Ingen email",
  "rules": [
    {
      "t": "set",
      "p": "error",
      "pt": "msg",
      "to": "{\t   \"warning\": \"Ingen rekvirent email\",\t   \"message\": \"Der blev ikke fundet en email på rekvirenten\",\t   \"attestType\": attestTypeString & \" (\" & attestType & \")\",\t   \"rekvisitus\": rekvisitus\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1420,
  "y": 1180,
  "wires": [
    [
      "318ade20ea25f53f",
      "ea86e708a04b93fe"
    ]
  ]
}

module.exports = Node;