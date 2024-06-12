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
  "x": 135,
  "y": 140,
  "wires": [
    [
      "df11964ca73a8d2c"
    ]
  ],
  "l": false
}

module.exports = Node;