const Node = {
  "id": "302c400a57aadc09",
  "type": "template",
  "z": "0ff39bfb9f284e88",
  "name": "Forespørgsel ↓\\n Slet alt",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 400,
  "wires": [
    [
      "6761e82b85e9f463"
    ]
  ]
}

Node.template = `
DELETE FROM 
    bestillinger
`

module.exports = Node;