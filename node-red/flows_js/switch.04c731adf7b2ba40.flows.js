const Node = {
  "id": "04c731adf7b2ba40",
  "type": "switch",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "",
  "property": "DEV_ENV",
  "propertyType": "env",
  "rules": [
    {
      "t": "neq",
      "v": "true",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 165,
  "y": 260,
  "wires": [
    [
      "df11964ca73a8d2c",
      "b51f28c621b2e8f3"
    ]
  ],
  "l": false
}

module.exports = Node;