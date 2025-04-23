const Node = {
  "id": "2278d37db8966d65",
  "type": "switch",
  "z": "7599a14e87e1d5c4",
  "name": "",
  "property": "rekvisition.rekvirentEmail",
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
  "x": 450,
  "y": 100,
  "wires": [
    [
      "e7107b73ccf977c6"
    ],
    [
      "3b3bba331669214b"
    ]
  ]
}

module.exports = Node;