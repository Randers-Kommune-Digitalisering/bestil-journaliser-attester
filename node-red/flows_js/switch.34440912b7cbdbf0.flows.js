const Node = {
  "id": "34440912b7cbdbf0",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Straffe- eller \\n børneattest?",
  "property": "topic",
  "propertyType": "msg",
  "rules": [
    {
      "t": "cont",
      "v": "Straffeatt.",
      "vt": "str"
    },
    {
      "t": "cont",
      "v": "Børneatt.",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 830,
  "y": 140,
  "wires": [
    [
      "e8106c4839bb377a"
    ],
    [
      "736368e5f40caef3"
    ],
    [
      "16245bab475b9515"
    ]
  ]
}

module.exports = Node;