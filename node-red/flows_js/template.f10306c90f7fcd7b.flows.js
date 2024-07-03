const Node = {
  "id": "f10306c90f7fcd7b",
  "type": "template",
  "z": "da53ba55e6b4ce3b",
  "name": "Drop database",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 160,
  "wires": [
    [
      "301f3a334ebc10cc"
    ]
  ]
}

Node.template = `
DROP TABLE bestillinger
`

module.exports = Node;