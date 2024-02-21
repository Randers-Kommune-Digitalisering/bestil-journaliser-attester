const Node = {
  "id": "93cb09dc24846f02",
  "type": "template",
  "z": "c715449c21b1a61f",
  "g": "758f62afc9c14cfa",
  "name": "Forespørgsel ↓\\n Opret tabel til attestbestillinger",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 890,
  "y": 360,
  "wires": [
    [
      "1cd01ef915d4d3ad"
    ]
  ]
}

Node.template = `
DROP TABLE bestillinger
`

module.exports = Node;