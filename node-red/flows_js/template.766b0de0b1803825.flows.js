const Node = {
  "id": "766b0de0b1803825",
  "type": "template",
  "z": "7599a14e87e1d5c4",
  "g": "5e3a8b5e70753001",
  "name": "Forespørgsel ↓\\n Opdater bestilling: \\n sæt erAdviseringAfsendt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 630,
  "y": 1500,
  "wires": [
    [
      "a679b11f368fcdf4"
    ]
  ]
}

Node.template = `
UPDATE
    {{tablename}}
SET
    erAdviseringAfsendt = 1,
    adviseringAfsendt = NOW()
WHERE uid = '{{rekvisition.uid}}'
`

module.exports = Node;