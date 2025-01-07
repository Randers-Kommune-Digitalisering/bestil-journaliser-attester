const Node = {
  "id": "d4a9d98f17c1a2c9",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Fra signflow?",
  "property": "from ~> $lowercase()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "eq",
      "v": "MAIL_SIGNFLOW",
      "vt": "env"
    },
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
  "outputs": 3,
  "x": 370,
  "y": 280,
  "wires": [
    [
      "34440912b7cbdbf0"
    ],
    [
      "e3cff5a6d194df11"
    ],
    [
      "3a8398988e97853b"
    ]
  ]
}

module.exports = Node;