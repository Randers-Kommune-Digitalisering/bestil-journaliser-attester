const Node = {
  "id": "02bb6e2381bd70ba",
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
  "x": 1310,
  "y": 620,
  "wires": [
    [
      "c30c37a9b6ac155d"
    ]
  ]
}

Node.template = `
UPDATE bestillinger
SET erAdviseringAfsendt = 1, adviseringAfsendt = NOW()
WHERE cpr = '{{rekvisitus}}'
`

module.exports = Node;