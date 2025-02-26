const Node = {
  "id": "11991c2d07c2df8c",
  "type": "template",
  "z": "2bbe54c0033669fc",
  "name": "Body",
  "field": "mail.body",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 430,
  "y": 260,
  "wires": [
    [
      "9859b86c199c8bd3"
    ]
  ]
}

Node.template = `
Hej {{bestilling.rekvirentNavn}},

Din bestilling af en eller flere attester på {{bestilling.rekvisitusCpr}} ({{bestilling.rekvisitus.cpr}}-XXXX) er modtaget, og vil blive behandlet hurtigst muligt.

Bestillingen har en maksimal behandlingstid på 19 dage.

Kontakt Personale og HR hvis du har spørgsmål til bestillingen.
`

module.exports = Node;