const Node = {
  "id": "7a1c635f2bb1d4ad",
  "type": "switch",
  "z": "7599a14e87e1d5c4",
  "name": "",
  "property": "rekvisition.navn",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 1290,
  "y": 100,
  "wires": [
    [
      "0c020237c5aea15e"
    ],
    [
      "5cb9ada2d302681d"
    ]
  ]
}

module.exports = Node;