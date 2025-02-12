const Node = {
  "id": "d3e38693e9d0b282",
  "type": "template",
  "z": "da53ba55e6b4ce3b",
  "g": "f9a031758876da49",
  "name": "Forespørgsel ↓\\n Drop tabel til attestbestillinger",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 760,
  "wires": [
    [
      "d9d6672ff246bbe0"
    ]
  ]
}

Node.template = `
DROP TABLE {{tablename}}
`

module.exports = Node;