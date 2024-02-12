const Node = {
  "id": "54e25a536e5bf014",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Læs bestillinger \\n som afventer bestilling",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 360,
  "wires": [
    [
      "7bbbc557d5af11ed"
    ]
  ]
}

Node.template = `
SELECT * FROM bestillinger
WHERE erBestilt = 0
AND erAfvist = 0
AND er{{type}} = 1
`

module.exports = Node;