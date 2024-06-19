const Node = {
  "id": "23100f679cf70dfb",
  "type": "switch",
  "z": "812b69015d6703b6",
  "g": "cf5fc001c060884c",
  "name": "Attachment?",
  "property": "filename",
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
  "x": 190,
  "y": 80,
  "wires": [
    [
      "1e078f150926a7ed"
    ],
    [
      "d25a04fab1cd4d7a"
    ]
  ]
}

module.exports = Node;