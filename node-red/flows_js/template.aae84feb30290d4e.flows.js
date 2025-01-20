const Node = {
  "id": "aae84feb30290d4e",
  "type": "template",
  "z": "0ff39bfb9f284e88",
  "name": "Forespørgsel ↓\\n Modtag attest",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 280,
  "wires": [
    [
      "66db645d0175a72c"
    ]
  ]
}

Node.template = `
UPDATE
    bestillinger
SET
    erAttestModtaget = 1,
    attestModtaget = NOW()
`

module.exports = Node;