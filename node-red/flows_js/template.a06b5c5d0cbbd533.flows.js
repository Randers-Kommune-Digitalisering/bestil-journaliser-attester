const Node = {
  "id": "a06b5c5d0cbbd533",
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
  "y": 120,
  "wires": [
    [
      "556de2a43bb9f856"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    bestillinger
WHERE
    rekvirentEmail = ''
AND erAfvist = 0
AND erAttestModtaget = 0
AND erBestilt = 0
`

module.exports = Node;