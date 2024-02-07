const Node = {
  "id": "d683aa9db557c595",
  "type": "template",
  "z": "c715449c21b1a61f",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 480,
  "y": 1540,
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