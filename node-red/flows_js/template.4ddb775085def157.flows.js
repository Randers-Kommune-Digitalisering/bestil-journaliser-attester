const Node = {
  "id": "4ddb775085def157",
  "type": "template",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Forespørgsel ↓\\n Antal bestillinger \\n som afventer bestilling",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 460,
  "y": 940,
  "wires": [
    [
      "ed3a1fcc265871e6"
    ]
  ]
}

Node.template = `
SELECT 
    (SELECT COUNT(*) FROM bestillinger WHERE erBestilt = false AND erAfvist = false AND erStraffeattest = true) AS staffeattestCount,
    (SELECT COUNT(*) FROM bestillinger WHERE erBestilt = false AND erAfvist = false AND erBorneattest = true) AS borneattestCount

`

module.exports = Node;