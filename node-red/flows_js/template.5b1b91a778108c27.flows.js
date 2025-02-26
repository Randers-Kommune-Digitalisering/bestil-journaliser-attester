const Node = {
  "id": "5b1b91a778108c27",
  "type": "template",
  "z": "7599a14e87e1d5c4",
  "name": "Body ext",
  "field": "mail_body_ext",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 940,
  "y": 880,
  "wires": [
    [
      "4bd70c2d4bd867cc"
    ]
  ]
}

Node.template = `

Attesten har registrerede forhold!

Personale og HR er blevet notificeret om attestmodtagelsen, og varetager det videre forløb.
Du bliver kontaktet i denne forbindelse.

`

module.exports = Node;