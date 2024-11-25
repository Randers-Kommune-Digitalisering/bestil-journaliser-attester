const Node = {
  "id": "3c6dfb0f20788f11",
  "type": "template",
  "z": "3fc172133f45b331",
  "name": "",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 320,
  "y": 100,
  "wires": [
    [
      "96e372f3ef53f603"
    ]
  ]
}

Node.template = `
UPDATE bestillinger SET erAfvist = 0 WHERE erAfvist = 1 AND afvist = '0000-00-00 00:00:00'
`

module.exports = Node;