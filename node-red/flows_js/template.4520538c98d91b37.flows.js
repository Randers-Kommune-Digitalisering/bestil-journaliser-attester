const Node = {
  "id": "4520538c98d91b37",
  "type": "template",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Forespørgsel ↓\\n Find afsluttet bestilling",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 1340,
  "wires": [
    [
      "9d0e3397b9fcb349"
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
AND erAttestModtaget = 1
AND bestillingModtaget > NOW() - INTERVAL 1 DAY;
`

module.exports = Node;