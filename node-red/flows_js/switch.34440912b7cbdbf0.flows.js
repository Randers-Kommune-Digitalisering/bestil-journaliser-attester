const Node = {
  "id": "34440912b7cbdbf0",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Er attest?",
  "property": "topic ~> $contains(\"Straffeatt.\") or topic ~> $contains(\"Børneatt.\")",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 700,
  "y": 140,
  "wires": [
    [
      "c8a478d18a8c50c0"
    ],
    [
      "cd3c585f1804623e"
    ]
  ]
}

module.exports = Node;