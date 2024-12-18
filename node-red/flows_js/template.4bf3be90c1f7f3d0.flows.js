const Node = {
  "id": "4bf3be90c1f7f3d0",
  "type": "template",
  "z": "3f3959fd24bb612e",
  "name": "SQL",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 180,
  "wires": [
    [
      "d90e7669b5195c59"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    bestillinger
WHERE
    erBestilt = 1
AND erAfvist = 0
AND erAttestModtaget = 0
AND bestiltHosPoliti < '{{time}}'
`

module.exports = Node;