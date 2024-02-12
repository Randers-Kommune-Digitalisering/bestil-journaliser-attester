const Node = {
  "id": "50ef0cb1a829a484",
  "type": "template",
  "z": "90c6b0b502e346fa",
  "g": "9e73796625eb7a3f",
  "name": "Forespørgsel ↓\\n Find sagsbehandlerEmail",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 690,
  "y": 380,
  "wires": [
    [
      "2579a996a62d5d99"
    ]
  ]
}

Node.template = `
SELECT sagsbehandlerEmail from bestillinger WHERE cpr = '{{medarbejder}}'
`

module.exports = Node;