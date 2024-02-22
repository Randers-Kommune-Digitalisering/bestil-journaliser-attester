const Node = {
  "id": "ab283f6ef1aae031",
  "type": "template",
  "z": "90c6b0b502e346fa",
  "d": true,
  "name": "Search parameters",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "json",
  "x": 430,
  "y": 1660,
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