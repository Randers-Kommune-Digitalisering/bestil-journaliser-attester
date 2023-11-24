const Node = {
  "id": "210707bf11c75fc7",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "name": "Request OK?",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "200",
      "vt": "num"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 900,
  "y": 760,
  "wires": [
    [
      "4afdec063a9e27c1"
    ],
    [
      "196f5245ad1b22f4"
    ]
  ],
  "_order": 51
}

module.exports = Node;