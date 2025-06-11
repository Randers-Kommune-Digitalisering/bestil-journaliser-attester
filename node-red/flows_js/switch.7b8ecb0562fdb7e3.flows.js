const Node = {
  "id": "7b8ecb0562fdb7e3",
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
  "y": 1160,
  "wires": [
    [
      "74d11e5eddeb547b"
    ]
  ]
}

module.exports = Node;