const Node = {
  "id": "35b3745ce40e7de4",
  "type": "template",
  "z": "dacda834ca49f9f0",
  "name": "Forespørgsel ↓\\n Indsæt bestilling i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 540,
  "y": 180,
  "wires": [
    [
      "2d8d6aeaeff2e473"
    ]
  ]
}

Node.template = `
INSERT INTO {{tablename}} (
    brugerDQ,
    rolle
)
VALUES
{{{values}}};
`

module.exports = Node;