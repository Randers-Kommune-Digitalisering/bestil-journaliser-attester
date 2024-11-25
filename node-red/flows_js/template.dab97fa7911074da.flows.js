const Node = {
  "id": "dab97fa7911074da",
  "type": "template",
  "z": "da53ba55e6b4ce3b",
  "g": "f9a031758876da49",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 390,
  "y": 900,
  "wires": [
    [
      "c6506af7e8a2a0cf"
    ]
  ]
}

Node.template = `
INSERT INTO roller (brugerDQ, rolle) VALUES ('DQ8932', '1')
`

module.exports = Node;