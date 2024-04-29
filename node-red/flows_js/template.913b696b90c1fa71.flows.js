const Node = {
  "id": "913b696b90c1fa71",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Læs bestillinger \\n som er bestilt ved Politi",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 390,
  "y": 740,
  "wires": [
    [
      "58e15d133adf1e7c"
    ]
  ]
}

Node.template = `
SELECT * FROM bestillinger
WHERE erBestilt = 1
AND erAfvist = 0
AND erAttestModtaget = 0
`

module.exports = Node;