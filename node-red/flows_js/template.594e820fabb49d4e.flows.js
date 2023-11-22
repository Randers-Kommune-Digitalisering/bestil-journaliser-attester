const Node = {
  "id": "594e820fabb49d4e",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Request body: \\n File details",
  "field": "body",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 504.1999816894531,
  "y": 1741.4000244140625,
  "wires": [
    []
  ],
  "_order": 54
}

Node.template = `
{
    "SagID": {{sagsId}},
    "DokumentNavn": "Straffeattest " & ( \$millis ~> \$fromMillis
}
`

module.exports = Node;