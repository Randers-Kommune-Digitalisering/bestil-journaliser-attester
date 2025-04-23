const Node = {
  "id": "e9b9fc48332775c3",
  "type": "switch",
  "z": "7599a14e87e1d5c4",
  "name": "",
  "property": "attestTypeString",
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
  "x": 2690,
  "y": 100,
  "wires": [
    [
      "800451218233e709"
    ],
    [
      "67ed969891f56ba4"
    ]
  ]
}

module.exports = Node;