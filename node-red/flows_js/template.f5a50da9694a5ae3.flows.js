const Node = {
  "id": "f5a50da9694a5ae3",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Sæt erBestilt = true",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 670,
  "y": 1400,
  "wires": [
    [
      "2c1fe8bbce1be889"
    ]
  ]
}

Node.template = `
UPDATE bestillinger
SET erBestilt = 1, bestiltHosPoliti = NOW()
WHERE er{{type}} = true
AND erBestilt = false
AND erAfvist = false
`

module.exports = Node;