const Node = {
  "id": "d683aa9db557c595",
  "type": "template",
  "z": "d8101c60e986806b",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 280,
  "wires": [
    [
      "d5cefe62486a783a"
    ]
  ]
}

Node.template = `
UPDATE bestillinger
SET erAfvist = 1, afvist = NOW()
WHERE uid = 3
`

module.exports = Node;