const Node = {
  "id": "934f943f0240b5bf",
  "type": "template",
  "z": "812b69015d6703b6",
  "name": "Forespørgsel ↓\\n Hent rekvirent mail",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1630,
  "y": 200,
  "wires": [
    [
      "94512b88e2b01ac2"
    ]
  ]
}

Node.template = `
SELECT
    rekvirentEmail, rekvirentDQ
FROM
    bestillinger
WHERE uid = '{{rekvisition.uid}}'
`

module.exports = Node;