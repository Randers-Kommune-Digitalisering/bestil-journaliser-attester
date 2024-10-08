const Node = {
  "id": "e04751f032eff419",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Læs bestillinger som er  \\n færdigbehandlet / afvist",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 650,
  "y": 740,
  "wires": [
    [
      "d9f2a2ae6ec2e715"
    ]
  ]
}

Node.template = `
SELECT
    *,
    CASE 
        WHEN erAfvist = 1 THEN afvist
        ELSE journaliseret
    END AS behandlet

FROM
    bestillinger
WHERE
    erAfvist = 1
OR  erAttestModtaget = 1

ORDER BY
adviseringAfsendt DESC, afvist DESC, journaliseret DESC, attestType, attestSubType, rekvirentDQ

LIMIT 100
`

module.exports = Node;