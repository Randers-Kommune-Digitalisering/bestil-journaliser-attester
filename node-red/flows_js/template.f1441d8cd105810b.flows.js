const Node = {
  "id": "f1441d8cd105810b",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "e05f4fc731fc4c56",
  "name": "Forespørgsel ↓\\n Opdater bestilling: \\n sæt erAdviseringAfsendt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1010,
  "y": 120,
  "wires": [
    [
      "31d3e061519022c3"
    ]
  ]
}

Node.template = `
UPDATE
    bestillinger
SET
    erAdviseringAfsendt = 1,
    adviseringAfsendt = NOW()
WHERE uid = '{{rekvisition.uid}}'
`

module.exports = Node;