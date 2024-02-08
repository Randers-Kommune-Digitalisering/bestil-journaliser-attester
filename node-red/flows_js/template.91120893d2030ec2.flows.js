const Node = {
  "id": "91120893d2030ec2",
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
  "y": 180,
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