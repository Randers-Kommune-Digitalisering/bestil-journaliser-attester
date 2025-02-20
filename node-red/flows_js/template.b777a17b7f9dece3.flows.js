const Node = {
  "id": "b777a17b7f9dece3",
  "type": "template",
  "z": "812b69015d6703b6",
  "g": "36761ede50c1f7fd",
  "name": "Tekst",
  "field": "text",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 370,
  "y": 1540,
  "wires": [
    [
      "860fd87edf49b0f7"
    ]
  ]
}

Node.template = `
Din bestilling af en eller flere attester på {{rekvisition.navn}} ({{rekvisition.cpr}}-XXXX) er modtaget, og vil blive behandlet hurtigst muligt.

Bestillingen har en maksimal behandlingstid på 19 dage.

Kontakt Personale og HR hvis du har spørgsmål til bestillingen.
`

module.exports = Node;