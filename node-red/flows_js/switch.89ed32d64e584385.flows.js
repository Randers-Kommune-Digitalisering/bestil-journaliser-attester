const Node = {
  "id": "89ed32d64e584385",
  "type": "switch",
  "z": "da7be20cd0c704b6",
  "name": "",
  "property": "payload ~> $count()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "gt",
      "v": "0",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 530,
  "y": 120,
  "wires": [
    [
      "f02e3d3ab1bc4f2c"
    ]
  ]
}

module.exports = Node;