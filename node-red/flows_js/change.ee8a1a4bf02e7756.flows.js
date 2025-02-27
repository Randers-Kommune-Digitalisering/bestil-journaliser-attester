const Node = {
  "id": "ee8a1a4bf02e7756",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "d774a29ec2b63a5e",
  "name": "set msg.sagsnummer \\n & msg.erJournaliseret",
  "rules": [
    {
      "t": "set",
      "p": "sagsnummer",
      "pt": "msg",
      "to": "payload.SagsNummer",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "erJournaliseret",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1420,
  "y": 2920,
  "wires": [
    [
      "7dd8ad2d3fa52fa1",
      "762d6ee2153f3102"
    ]
  ]
}

module.exports = Node;