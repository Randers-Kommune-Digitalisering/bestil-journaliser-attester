const Node = {
  "id": "354b6953d91a3138",
  "type": "template",
  "z": "c715449c21b1a61f",
  "g": "826ac4afb5a7dcfc",
  "name": "Forespørgsel ↓\\n Hent rolle med DQ-nr.",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 1080,
  "wires": [
    [
      "960f32705ff0e3b6"
    ]
  ]
}

Node.template = `
SELECT * FROM {{tablename}} WHERE brugerDQ = '{{dqUser}}'
`

module.exports = Node;