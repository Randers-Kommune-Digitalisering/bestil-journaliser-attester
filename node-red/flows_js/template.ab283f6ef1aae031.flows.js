const Node = {
  "id": "ab283f6ef1aae031",
  "type": "template",
  "z": "90c6b0b502e346fa",
  "d": true,
  "g": "70f0dd8ceb56e8a4",
  "name": "Search parameters",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 530,
  "y": 1760,
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