const Node = {
  "id": "77463e86587217c1",
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
  "y": 320,
  "wires": [
    [
      "53e9f1de609a41f2"
    ]
  ]
}

Node.template = `
UPDATE
    bestillinger
SET
    erAfvist = 1,
    afvist = NOW()
WHERE
    erBestilt = 1
AND erAfvist = 0
AND erAttestModtaget = 0
{{#uids}}
AND uid = {{.}}
{{/uids}}
`

module.exports = Node;