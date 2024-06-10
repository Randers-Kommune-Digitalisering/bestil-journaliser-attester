const Node = {
  "id": "f598f37b63f7edc4",
  "type": "template",
  "z": "9f905819f05b7a1a",
  "name": "Forespørgsel ↓\\n Slet nuværende roller",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 280,
  "wires": [
    [
      "a257aa07a446ec58"
    ]
  ]
}

Node.template = `
DELETE FROM {{tablename}}
`

module.exports = Node;