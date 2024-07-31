const Node = {
  "id": "614fe7bbe8445a6c",
  "type": "template",
  "z": "90c6b0b502e346fa",
  "g": "f58662076006e952",
  "name": "Forespørgsel ↓\\n Opdater bestilling: \\n sæt erJournaliseret",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 2660,
  "wires": [
    [
      "fe34c82fa3898920"
    ]
  ]
}

Node.template = `
UPDATE
    bestillinger
SET
    erJournaliseret = 1,
    journaliseret = NOW(),
    sagsnummer = '{{{sagsnummer}}}'
WHERE
    uid = {{rekvisition.uid}}
`

module.exports = Node;