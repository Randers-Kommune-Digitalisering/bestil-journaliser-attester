const Node = {
  "id": "b85543fb44d33ffe",
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
  "y": 1240,
  "wires": [
    [
      "1db7926261199791"
    ]
  ]
}

Node.template = `
En bestilling af en {{attestType}} på {{rekvisitus.navn}} er modtaget, og har registrerede forhold!

Attesten blev rekvireret af {{rekvisition.rekvirentNavn}} ({{rekvisition.rekvirentDQ}}), og kan kontaktes på {{{rekvisition.rekvirentEmail}}}.

`

module.exports = Node;