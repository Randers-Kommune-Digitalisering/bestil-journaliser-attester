const Node = {
  "id": "fd809120d2a68701",
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
  "y": 180,
  "wires": [
    [
      "7366dab72b2b7bcd"
    ]
  ]
}

Node.template = `
SELECT * FROM bestillinger
WHERE erBestilt = 0
AND erAfvist = 0
`

module.exports = Node;