const Node = {
  "id": "21451db13d0e2ffc",
  "type": "template",
  "z": "7599a14e87e1d5c4",
  "name": "Body",
  "field": "mail.body",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 730,
  "y": 480,
  "wires": [
    [
      "919f0530a5cb6a9c",
      "de98ad2daba898a5"
    ]
  ]
}

Node.template = `
Hej {{rekvisition.rekvirentNavn}},

Din bestilling af en attest på {{rekvisition.cpr}}-XXXX er blevet afvist af Personale og HR.

Afvisningen er sket på følgende grundlag: {{beskrivelse}}

Kontakt Personale og HR, hvis du mener der er tale om en fejl.
`

module.exports = Node;