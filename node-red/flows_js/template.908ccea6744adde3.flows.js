const Node = {
  "id": "908ccea6744adde3",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "7aebfedb0f520e44",
  "name": "Tekst",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 450,
  "y": 880,
  "wires": [
    [
      "a756faa2e4149fca",
      "9c644f8443abd95d",
      "3ce9ab77e2807013"
    ]
  ]
}

Node.template = `
Din bestilling af en {{attestType}} er blevet afvist af systemansvarlig.
Kontakt HR hvis du mener der er tale om en fejl.
`

module.exports = Node;