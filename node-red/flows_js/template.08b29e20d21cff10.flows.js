const Node = {
  "id": "08b29e20d21cff10",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Sæt erBestilt = true",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 630,
  "y": 1120,
  "wires": [
    [
      "47f3a96b98097add"
    ]
  ]
}

Node.template = `
UPDATE
    bestillinger
SET
    erBestilt = 1,
    bestiltHosPoliti = NOW()
WHERE
    {{{whereClause}}}
`

module.exports = Node;