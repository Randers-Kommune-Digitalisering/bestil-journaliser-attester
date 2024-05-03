const Node = {
  "id": "eb3d56c834fca843",
  "type": "template",
  "z": "c8e22be6d882c9b6",
  "name": "sql",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 440,
  "y": 360,
  "wires": [
    [
      "b501b494f5796a88"
    ]
  ]
}

Node.template = `
DROP TABLE bestillinger
`

module.exports = Node;