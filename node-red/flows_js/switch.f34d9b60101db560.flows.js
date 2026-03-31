const Node = {
  "id": "f34d9b60101db560",
  "type": "switch",
  "z": "7599a14e87e1d5c4",
  "g": "044d9f3b18e135a4",
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
  "x": 1195,
  "y": 1500,
  "wires": [
    [
      "ba8dd0f3e3352adf",
      "b19142749364bb2c"
    ]
  ],
  "l": false
}

module.exports = Node;