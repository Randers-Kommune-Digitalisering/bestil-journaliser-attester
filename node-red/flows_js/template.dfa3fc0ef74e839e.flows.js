const Node = {
  "id": "dfa3fc0ef74e839e",
  "type": "template",
  "z": "90c6b0b502e346fa",
  "g": "2eb13e282655de1e",
  "name": "Forespørgsel ↓\\n Opdater bestilling: \\n sæt erAttestModtaget",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 600,
  "y": 1280,
  "wires": [
    [
      "df7f1dd69541f5f0"
    ]
  ]
}

Node.template = `
UPDATE
    bestillinger
SET
    {{{afvistAt}}}
    erAttestModtaget = 1,
    attestModtaget = NOW(),
    erAfvist = {{erAfvistValue}}
WHERE
    uid = {{rekvisition.uid}}
`

module.exports = Node;