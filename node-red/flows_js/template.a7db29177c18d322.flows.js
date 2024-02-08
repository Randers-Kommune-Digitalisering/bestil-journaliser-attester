const Node = {
  "id": "a7db29177c18d322",
  "type": "template",
  "z": "c715449c21b1a61f",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 490,
  "y": 1380,
  "wires": [
    [
      "d5cefe62486a783a"
    ]
  ]
}

Node.template = `
SELECT * FROM bestillinger WHERE uid = 3;
`

module.exports = Node;