const Node = {
  "id": "34440912b7cbdbf0",
  "type": "switch",
  "z": "971a7ae6df987a48",
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
  "x": 690,
  "y": 100,
  "wires": [
    [
      "9a48fc900c237148"
    ],
    [
      "16245bab475b9515"
    ]
  ],
  "_order": 82
}

module.exports = Node;