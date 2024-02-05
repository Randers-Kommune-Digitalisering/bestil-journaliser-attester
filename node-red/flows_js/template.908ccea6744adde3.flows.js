const Node = {
  "id": "908ccea6744adde3",
  "type": "template",
  "z": "812b69015d6703b6",
  "name": "Tekst",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 590,
  "y": 640,
  "wires": [
    [
      "894558ccd508489d"
    ]
  ]
}

Node.template = `
Din bestilling af en straffe- eller børneattest er blevet afvist af sikkerhedsmoderatoren.
Opret en support-sag hvis du mener der er tale om en fejl.
`

module.exports = Node;