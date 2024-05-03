const Node = {
  "id": "f10306c90f7fcd7b",
  "type": "template",
  "z": "c715449c21b1a61f",
  "d": true,
  "g": "b33cb8b26af139f5",
  "name": "Drop database",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 760,
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