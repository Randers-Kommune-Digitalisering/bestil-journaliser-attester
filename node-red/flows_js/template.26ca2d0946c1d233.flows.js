const Node = {
  "id": "26ca2d0946c1d233",
  "type": "template",
  "z": "43d6b9b519cc6615",
  "name": "",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 140,
  "y": 360,
  "wires": [
    [
      "c0235e1327bc6f8f"
    ]
  ]
}

Node.template = `
Lokalt brugernavn;AfdelingsID;Navn;Email;Rolle;Niveau 09;Niveau 08;Niveau 05
DQA1234;Døgnafdeling (RG_BDM);Test navn 1;Test.Navn.1@randers.dk;Stedfortraeder for Leder;Børn og Skole (RG_BSK);Familie (RG_BFA);Familie- og rådgivningscenter (RG_BFY)
DQA4321;Døgnafdeling (RG_BDM);Test navn 2;Test.Navn.2@randers.dk;Leder;Børn og Skole (RG_BSK);Familie (RG_BFA);Familie- og rådgivningscenter (RG_BFY)
`

module.exports = Node;