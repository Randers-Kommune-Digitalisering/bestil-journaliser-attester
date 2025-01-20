const Node = {
  "id": "57e62e9891ed317f",
  "type": "template",
  "z": "0ff39bfb9f284e88",
  "name": "Forespørgsel ↓\\n Indsæt bestilling",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 520,
  "y": 180,
  "wires": [
    [
      "a54026d42c8339c3"
    ]
  ]
}

Node.template = `
INSERT INTO
    bestillinger
    (rekvirentNavn,
    rekvirentDQ,
    rekvirentEmail,
    cpr,
    navn,
    attestType,
    attestSubType,
    erAfvist)
VALUES
    ("rekvirent", "dq1234", "test@randers.dk", "123456-7890", "Test Testerson", 0, 0, 0)
`

module.exports = Node;