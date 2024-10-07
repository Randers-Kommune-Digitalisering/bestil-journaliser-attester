const Node = {
  "id": "908ccea6744adde3",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "7aebfedb0f520e44",
  "name": "Tekst",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 550,
  "y": 940,
  "wires": [
    [
      "a756faa2e4149fca",
      "9c644f8443abd95d",
      "c67d83041b426bb9"
    ]
  ]
}

Node.template = `
Din bestilling af en {{attestType}} på {{rekvisitus.navn}} er blevet afvist af Personale og HR.

Afvisningen er sket på følgende grundlag: {{beskrivelse}}

Kontakt Personale og HR, hvis du mener der er tale om en fejl.
`

module.exports = Node;