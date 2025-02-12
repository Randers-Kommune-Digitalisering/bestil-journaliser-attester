const Node = {
  "id": "07e6265263459be6",
  "type": "template",
  "z": "da7be20cd0c704b6",
  "name": "SQL",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 420,
  "y": 700,
  "wires": [
    [
      "63396a04b071dd90"
    ]
  ]
}

Node.template = `
UPDATE
    bestillinger
SET
    rekvirentEmail = '{{{rekvirentEmail}}}'
WHERE
    rekvirentDQ = '{{{dqUser}}}'
`

module.exports = Node;