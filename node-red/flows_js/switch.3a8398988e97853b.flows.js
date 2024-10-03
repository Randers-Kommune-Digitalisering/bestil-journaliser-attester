const Node = {
  "id": "3a8398988e97853b",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Autosvar?",
  "property": "topic ~> $lowercase() ~> $contains(\"autosvar\")",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 580,
  "y": 360,
  "wires": [
    [
      "0d4721dfa9de3c05"
    ]
  ]
}

module.exports = Node;