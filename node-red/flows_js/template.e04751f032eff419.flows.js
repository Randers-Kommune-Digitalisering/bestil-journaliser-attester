const Node = {
  "id": "e04751f032eff419",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Læs bestillinger som er  \\n færdigbehandlet / afvist",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 430,
  "y": 640,
  "wires": [
    [
      "d9f2a2ae6ec2e715"
    ]
  ]
}

Node.template = `
SELECT * FROM bestillinger
WHERE erAfvist = true
OR erAttestModtaget = true
LIMIT 10
`

module.exports = Node;