const Node = {
  "id": "34440912b7cbdbf0",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Straffeattest?",
  "property": "topic",
  "propertyType": "msg",
  "rules": [
    {
      "t": "cont",
      "v": "Digitalpost (29189668): Straffeatt.",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 830,
  "y": 140,
  "wires": [
    [
      "9a48fc900c237148"
    ],
    [
      "16245bab475b9515"
    ]
  ]
}

module.exports = Node;