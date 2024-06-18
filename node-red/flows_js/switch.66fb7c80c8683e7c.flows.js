const Node = {
  "id": "66fb7c80c8683e7c",
  "type": "switch",
  "z": "8de8949c7710fbab",
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
  "x": 175,
  "y": 140,
  "wires": [
    [
      "71bf53225d6c6772"
    ]
  ],
  "l": false
}

module.exports = Node;