const Node = {
  "id": "34e42e9b82583d3e",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Læs bestillinger \\n som afventer bestilling",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 640,
  "y": 380,
  "wires": [
    [
      "2dc88473a65b419a"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    bestillinger
WHERE
    erBestilt = 0
AND erAfvist = 0
AND attestType = {{attestType}}
AND attestSubType = {{subType}}
`

module.exports = Node;