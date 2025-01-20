const Node = {
  "id": "8ce0974b334b9ead",
  "type": "template",
  "z": "da53ba55e6b4ce3b",
  "g": "08c9693aab6c4f3a",
  "name": "Check columns",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 180,
  "wires": [
    [
      "79097739a3123250"
    ]
  ]
}

Node.template = `
SHOW COLUMNS FROM \`{{tablename}}\` LIKE 'erDublikat';
`

module.exports = Node;