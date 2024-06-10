const Node = {
  "id": "3afba7c5431fa7d6",
  "type": "template",
  "z": "9f905819f05b7a1a",
  "name": "Forespørgsel ↓\\n Indsæt roller i tabel",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 380,
  "wires": [
    [
      "402853a7c787d9e6"
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