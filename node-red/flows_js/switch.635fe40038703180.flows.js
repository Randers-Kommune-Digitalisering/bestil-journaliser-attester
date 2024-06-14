const Node = {
  "id": "635fe40038703180",
  "type": "switch",
  "z": "43d6b9b519cc6615",
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
  "x": 295,
  "y": 100,
  "wires": [
    [
      "03701452390e007d"
    ]
  ],
  "l": false
}

module.exports = Node;