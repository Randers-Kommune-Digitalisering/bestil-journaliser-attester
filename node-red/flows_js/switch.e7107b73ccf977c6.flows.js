const Node = {
  "id": "e7107b73ccf977c6",
  "type": "switch",
  "z": "7599a14e87e1d5c4",
  "name": "",
  "property": "rekvisition.rekvirentNavn",
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
  "x": 730,
  "y": 100,
  "wires": [
    [
      "c26611da1b48072b"
    ],
    [
      "f86450115244350c"
    ]
  ]
}

module.exports = Node;