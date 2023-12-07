const Node = {
  "id": "e9fb405205fa3be3",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "name": "Antal sager?",
  "property": "count = 0 or count > 1",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "false"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 530,
  "y": 1180,
  "wires": [
    [
      "4984df54dc362ad8"
    ],
    [
      "b8d26dd87dd4156e"
    ]
  ],
  "_order": 59
}

module.exports = Node;