const Node = {
  "id": "aadfaf3fb94164b9",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Straffeattester",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 400,
  "y": 1020,
  "wires": [
    [
      "ed3a1fcc265871e6"
    ]
  ]
}

Node.template = `
SELECT COUNT(*) FROM bestillinger
WHERE erBestilt = false
AND erStraffeattest = true
AND erAfvist = false
`

module.exports = Node;