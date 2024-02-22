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
  "x": 530,
  "y": 860,
  "wires": [
    [
      "a756faa2e4149fca",
      "9c644f8443abd95d",
      "c67d83041b426bb9"
    ]
  ]
}

Node.template = `
Din bestilling af en straffe- eller børneattest er blevet afvist af sikkerhedsmoderatoren.
Opret en support-sag hvis du mener der er tale om en fejl.
`

module.exports = Node;