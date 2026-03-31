const Node = {
  "id": "e6ae2d84b685b55d",
  "type": "template",
  "z": "da7be20cd0c704b6",
  "name": "SQL",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 230,
  "y": 1160,
  "wires": [
    [
      "b92615edc8a7450b"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    bestillinger
WHERE
    navn = ''
AND erBestilt = 0
AND erAfvist = 0
`

module.exports = Node;