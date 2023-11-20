const Node = {
  "id": "ab283f6ef1aae031",
  "type": "template",
  "z": "971a7ae6df987a48",
  "name": "Search parameters",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 510,
  "y": 980,
  "wires": [
    []
  ],
  "_order": 32
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