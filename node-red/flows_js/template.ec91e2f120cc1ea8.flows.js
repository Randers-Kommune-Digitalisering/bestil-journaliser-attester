const Node = {
  "id": "ec91e2f120cc1ea8",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Sæt erAfvist = true",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 670,
  "y": 1280,
  "wires": [
    [
      "408ffbc0629943d3"
    ]
  ]
}

Node.template = `
UPDATE bestillinger SET erAfvist = 1 WHERE uid = {{id}}
`

module.exports = Node;