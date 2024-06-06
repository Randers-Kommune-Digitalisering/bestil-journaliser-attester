const Node = {
  "id": "a056e4c75824cd9d",
  "type": "template",
  "z": "dacda834ca49f9f0",
  "name": "Forespørgsel ↓\\n Slet nuværende roller",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 600,
  "y": 180,
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