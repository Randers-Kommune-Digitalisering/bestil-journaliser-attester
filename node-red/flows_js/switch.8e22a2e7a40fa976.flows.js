const Node = {
  "id": "8e22a2e7a40fa976",
  "type": "switch",
  "z": "812b69015d6703b6",
  "g": "aaf412de2154cc20",
  "name": "",
  "property": "ignoreMetrics",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "true",
      "vt": "jsonata"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 1055,
  "y": 300,
  "wires": [
    [
      "8fd1e4dfe3fefc28",
      "c65c073052b2823c"
    ]
  ],
  "l": false
}

module.exports = Node;