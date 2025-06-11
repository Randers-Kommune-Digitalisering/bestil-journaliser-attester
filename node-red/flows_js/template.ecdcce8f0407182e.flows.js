const Node = {
  "id": "ecdcce8f0407182e",
  "type": "template",
  "z": "da7be20cd0c704b6",
  "name": "SQL",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 270,
  "y": 800,
  "wires": [
    [
      "fdb515e96e91caed"
    ]
  ]
}

Node.template = `
SELECT
    rekvirentEmail
FROM
    bestillinger
WHERE
    rekvirentEmail != ''
AND rekvirentDQ = '{{dqUser}}'
LIMIT 1
`

module.exports = Node;