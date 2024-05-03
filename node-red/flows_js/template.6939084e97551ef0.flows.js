const Node = {
  "id": "6939084e97551ef0",
  "type": "template",
  "z": "c8e22be6d882c9b6",
  "name": "Forespørgsel ↓\\n Find rekvirentEmail",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 570,
  "y": 120,
  "wires": [
    [
      "33663d48005740be"
    ]
  ]
}

Node.template = `
SELECT * from bestillinger WHERE cpr = '{{rekvisitus}}'
`

module.exports = Node;