const Node = {
  "id": "a00b9313a5b36d04",
  "type": "switch",
  "z": "43d6b9b519cc6615",
  "name": "Kontrollér fil",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "buffer",
      "vt": "buffer"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 190,
  "y": 280,
  "wires": [
    [
      "01882b758cc8d6ab"
    ],
    []
  ]
}

module.exports = Node;