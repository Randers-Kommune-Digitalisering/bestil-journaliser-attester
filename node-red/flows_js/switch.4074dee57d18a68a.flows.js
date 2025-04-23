const Node = {
  "id": "4074dee57d18a68a",
  "type": "switch",
  "z": "7599a14e87e1d5c4",
  "name": "",
  "property": "rekvisition",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "object",
      "vt": "object"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 150,
  "y": 100,
  "wires": [
    [
      "2278d37db8966d65"
    ],
    [
      "9ff0ce44645a9658"
    ]
  ]
}

module.exports = Node;