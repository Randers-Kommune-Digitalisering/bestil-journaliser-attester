const Node = {
  "id": "579e2b301cfbbe0c",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "38c43765fdc8e29d",
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
  "x": 600,
  "y": 560,
  "wires": [
    [
      "93d01421f25584ea"
    ],
    [
      "ef3c2c1e44c49441"
    ]
  ]
}

module.exports = Node;