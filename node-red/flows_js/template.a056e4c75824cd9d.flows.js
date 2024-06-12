const Node = {
  "id": "a056e4c75824cd9d",
  "type": "template",
  "z": "43d6b9b519cc6615",
  "name": "Forespørgsel ↓\\n Slet nuværende roller",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 840,
  "y": 260,
  "wires": [
    [
      "c35cd03d03336b9e"
    ]
  ]
}

Node.template = `
DELETE FROM {{tablename}}
`

module.exports = Node;