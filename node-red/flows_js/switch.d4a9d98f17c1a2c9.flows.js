const Node = {
  "id": "d4a9d98f17c1a2c9",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Fra hovedpostkasse?",
  "property": "from ~> $lowercase()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "eq",
      "v": "MAIL_HOVEDPOST",
      "vt": "env"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 400,
  "y": 280,
  "wires": [
    [
      "34440912b7cbdbf0"
    ],
    [
      "0d4721dfa9de3c05"
    ]
  ]
}

module.exports = Node;