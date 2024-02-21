const Node = {
  "id": "e83eebe663452a72",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Hent rekvirentEmail",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 690,
  "y": 1200,
  "wires": [
    [
      "f24b9d89acaa4706"
    ]
  ]
}

Node.template = `
SELECT rekvirentEmail FROM bestillinger
WHERE uid = {{id}}
`

module.exports = Node;