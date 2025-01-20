const Node = {
  "id": "3a3e2f1b51feb505",
  "type": "template",
  "z": "da53ba55e6b4ce3b",
  "g": "08c9693aab6c4f3a",
  "name": "Add erDublikat column",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1000,
  "y": 180,
  "wires": [
    [
      "9f3e0f2b69b6d096"
    ]
  ]
}

Node.template = `
ALTER TABLE {{tablename}}
ADD erDublikat BOOL DEFAULT False;
`

module.exports = Node;