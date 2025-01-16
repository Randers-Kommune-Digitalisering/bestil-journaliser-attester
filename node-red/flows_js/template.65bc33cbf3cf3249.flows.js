const Node = {
  "id": "65bc33cbf3cf3249",
  "type": "template",
  "z": "0ff39bfb9f284e88",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 180,
  "y": 180,
  "wires": [
    []
  ]
}

Node.template = `
strftime("%d", ts) = ? AND strftime("%m", ts) = ? AND strftime("%Y", ts) = ?

' (f'{day:02}', f'{month:02}', str(year))
`

module.exports = Node;