const Node = {
  "id": "e64d73f183df0930",
  "type": "switch",
  "z": "752aedf8618e3123",
  "name": "Success?",
  "property": "payload.success",
  "propertyType": "msg",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 880,
  "y": 80,
  "wires": [
    [
      "5c5547f6dea52c5e"
    ],
    [
      "76a3dfb39fd280cf",
      "5c5547f6dea52c5e"
    ]
  ]
}

module.exports = Node;