const Node = {
  "id": "7bb4223264fa0049",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "e3ae7033cb5f43a3",
  "name": "mail?",
  "property": "error.source.type",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "e-mail in",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1130,
  "y": 2640,
  "wires": [
    [
      "1f79820766d7b8dc",
      "1c67a3de1811ead9"
    ]
  ]
}

module.exports = Node;