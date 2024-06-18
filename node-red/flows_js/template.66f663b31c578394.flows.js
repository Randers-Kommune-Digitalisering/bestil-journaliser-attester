const Node = {
  "id": "66f663b31c578394",
  "type": "template",
  "z": "8de8949c7710fbab",
  "d": true,
  "g": "b54dd860c113d0d4",
  "name": "Search parameters",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 630,
  "y": 400,
  "wires": [
    []
  ]
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