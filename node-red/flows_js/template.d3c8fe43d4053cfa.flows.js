const Node = {
  "id": "d3c8fe43d4053cfa",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Børneattester",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 400,
  "y": 740,
  "wires": [
    [
      "ed3a1fcc265871e6"
    ]
  ]
}

Node.template = `
SELECT COUNT(*) FROM bestillinger WHERE erBestilt = false AND erBorneattest = true
`

module.exports = Node;