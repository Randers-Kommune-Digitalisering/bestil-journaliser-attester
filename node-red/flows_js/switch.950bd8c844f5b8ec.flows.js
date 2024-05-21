const Node = {
  "id": "950bd8c844f5b8ec",
  "type": "switch",
  "z": "797d31130fc2a555",
  "name": "hasAttachment?",
  "property": "hasAttachment",
  "propertyType": "msg",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 460,
  "y": 60,
  "wires": [
    [
      "0a5e3fd59e5826b9"
    ],
    [
      "b6fa57ad2a26bb4e"
    ]
  ]
}

module.exports = Node;