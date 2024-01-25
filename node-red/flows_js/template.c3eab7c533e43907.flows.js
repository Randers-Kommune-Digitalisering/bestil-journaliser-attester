const Node = {
  "id": "c3eab7c533e43907",
  "type": "template",
  "z": "VueExample",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 530,
  "y": 360,
  "wires": [
    [
      "c0040b40413b0731"
    ]
  ]
}

Node.template = `
DROP TABLE bestillinger
`

module.exports = Node;