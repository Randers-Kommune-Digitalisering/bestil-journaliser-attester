const Node = {
  "id": "652ebd661c81ab99",
  "type": "template",
  "z": "90c6b0b502e346fa",
  "d": true,
  "g": "d774a29ec2b63a5e",
  "name": "File details",
  "field": "payload",
  "fieldType": "msg",
  "format": "json",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 410,
  "y": 2460,
  "wires": [
    []
  ]
}

Node.template = `
{
  "Eksternid": "string",
  "RegistreretAfID": 0,
  "SagID": 0,
  "DokumentNavn": "string",
  "SagsPart": {
    "PartId": 0,
    "PartType": "Firma",
    "CVRnummer": "string",
    "CPRnummer": "string",
    "Navn": "string"
  },
  "DokumentArt": {
    "Uuid": "00000000-0000-0000-0000-000000000000",
    "Id": 0,
    "Navn": "string"
  },
  "Beskrivelse": "string",
  "RegistreringsDato": "2023-11-20T09:39:13.165Z",
  "OmfattetAfAktindsigt": true,
  "AktindsigtKommentar": "string",
  "PaaPostliste": true,
  "PostlisteTitel": "string",
  "PostlisteBeskrivelse": "string"
}
`

module.exports = Node;