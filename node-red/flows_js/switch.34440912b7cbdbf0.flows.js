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
  "x": 820,
  "y": 160,
  "wires": [
    [
      "b36a5b5b2d189cb2"
    ],
    [
      "16245bab475b9515"
    ]
  ]
}

module.exports = Node;