const Node = {
  "id": "91120893d2030ec2",
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
  "y": 1440,
  "wires": [
    [
      "d5cefe62486a783a"
    ]
  ]
}

Node.template = `
DROP TABLE bestillinger
`

module.exports = Node;