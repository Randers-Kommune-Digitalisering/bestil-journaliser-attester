const Node = {
  "id": "e07da625d09c0f03",
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
  "y": 1020,
  "wires": [
    [
      "988843b0974726dc"
    ]
  ]
}

Node.template = `
Hej {{rekvisition.rekvirentNavn}},

Din bestilling af en {{attestTypeString}} på {{rekvisition.navn}} er blevet afvist.
Der er sandsynligvis ikke givet samtykke til indhentningen.
`

module.exports = Node;