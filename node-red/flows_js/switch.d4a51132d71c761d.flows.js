const Node = {
  "id": "d4a51132d71c761d",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Bestilt af HR?",
  "property": "mail",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "MAIL_HR",
      "vt": "env"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 280,
  "y": 1180,
  "wires": [
    [
      "4520538c98d91b37"
    ],
    [
      "74a7e7478107c335"
    ]
  ]
}

module.exports = Node;