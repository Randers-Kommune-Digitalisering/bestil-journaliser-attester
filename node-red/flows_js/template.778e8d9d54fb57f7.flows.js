const Node = {
  "id": "778e8d9d54fb57f7",
  "type": "template",
  "z": "da7be20cd0c704b6",
  "name": "SQL",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 380,
  "y": 1300,
  "wires": [
    [
      "1e17afdebb70eb37"
    ]
  ]
}

Node.template = `
UPDATE
    bestillinger
SET
    navn = '{{{rekvisitusNavn}}}'
WHERE
    cpr = '{{{rekvisition.cpr}}}'
`

module.exports = Node;