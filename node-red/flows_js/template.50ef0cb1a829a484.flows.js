const Node = {
  "id": "50ef0cb1a829a484",
  "type": "template",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Forespørgsel ↓\\n Find bestilling",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 840,
  "y": 920,
  "wires": [
    [
      "2579a996a62d5d99"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    bestillinger
WHERE
    cpr = '{{rekvisitus}}'
{{{attestTypeClause}}}
AND erBestilt = 1
AND erAttestModtaget = 0
ORDER BY
    bestillingModtaget ASC
`

module.exports = Node;