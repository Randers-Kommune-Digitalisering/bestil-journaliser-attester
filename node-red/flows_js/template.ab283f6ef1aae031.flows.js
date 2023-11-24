const Node = {
  "id": "ab283f6ef1aae031",
  "type": "template",
  "z": "971a7ae6df987a48",
  "d": true,
  "name": "Search parameters",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 470,
  "y": 800,
  "wires": [
    []
  ],
  "_order": 44
}

Node.template = `
{
  "PrimaerPerson": {
    "CprNummer": "string"
  },
  "AllePersoner": {
    "CprNummer": "string"
  },
  "SagsTyper": [
    {
      "Navn": "Personalesag"
    }
  ]
}
`

module.exports = Node;