const Node = {
  "id": "a8952e1975753d0d",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "5ec19f7d82760692",
  "name": "!mail?",
  "property": "error.source.type",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "e-mail in",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 430,
  "y": 1660,
  "wires": [
    [
      "ec9e202f8ef8be22"
    ]
  ]
}

module.exports = Node;