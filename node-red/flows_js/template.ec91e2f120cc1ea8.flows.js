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
  "x": 630,
  "y": 980,
  "wires": [
    [
      "408ffbc0629943d3"
    ]
  ]
}

Node.template = `
UPDATE bestillinger
SET
    erAfvist = 1,
    afvist = NOW()
WHERE uid = {{uid}}
`

module.exports = Node;