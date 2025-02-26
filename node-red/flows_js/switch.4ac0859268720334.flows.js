const Node = {
  "id": "4ac0859268720334",
  "type": "switch",
  "z": "7599a14e87e1d5c4",
  "name": "",
  "property": "erJournaliseret",
  "propertyType": "msg",
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
  "x": 1330,
  "y": 820,
  "wires": [
    [
      "ddb855add0b1deea"
    ],
    [
      "210d09305bda7587"
    ]
  ]
}

module.exports = Node;