const Node = {
  "id": "2d72038f62f4b744",
  "type": "template",
  "z": "0ff39bfb9f284e88",
  "name": "Forespørgsel ↓\\n Find afsluttet bestilling",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 540,
  "y": 80,
  "wires": [
    [
      "3ed8a7768d536e09"
    ]
  ]
}

Node.template = `
SELECT
    *
FROM
    bestillinger
WHERE
    bestillingModtaget > NOW() - INTERVAL 1 DAY;
`

module.exports = Node;