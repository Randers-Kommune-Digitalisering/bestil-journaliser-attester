const Node = {
  "id": "a7db29177c18d322",
  "type": "template",
  "z": "d8101c60e986806b",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 120,
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