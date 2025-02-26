const Node = {
  "id": "9a88db9425486bc0",
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
  "y": 660,
  "wires": [
    [
      "95ccedc385ae4e61",
      "fdbfc3a9d56ea41e"
    ]
  ]
}

Node.template = `
Hej {{rekvisition.rekvirentNavn}},

Din bestilling af en {{attestTypeString}} på {{rekvisition.navn}} ({{rekvisition.cpr}}-XXXX) er udløbet, da den har overskredet den maksimale behandlingstid på 19 dage.

Genbestil attesten hvis du stadig har behov for denne.
`

module.exports = Node;