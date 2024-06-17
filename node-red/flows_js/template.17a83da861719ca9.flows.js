const Node = {
  "id": "17a83da861719ca9",
  "type": "template",
  "z": "da53ba55e6b4ce3b",
  "g": "317c8a6de7e1d213",
  "name": "Forespørgsel ↓\\n Opret tabel til SD roller",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 200,
  "y": 460,
  "wires": [
    [
      "e866ed3543c9a168"
    ]
  ]
}

Node.template = `
CREATE TABLE IF NOT EXISTS {{tablename}} (

    brugerDQ VARCHAR(255),
    rolle VARCHAR(255)
    
);
`

module.exports = Node;