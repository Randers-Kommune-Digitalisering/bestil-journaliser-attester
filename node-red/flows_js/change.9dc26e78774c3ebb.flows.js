const Node = {
  "id": "9dc26e78774c3ebb",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
  "name": "AD oplysninger",
  "rules": [
    {
      "t": "set",
      "p": "ad",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "ad.clientId",
      "pt": "msg",
      "to": "AZURE_CLIENTID",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "ad.tenantId",
      "pt": "msg",
      "to": "AZURE_TENANTID",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "ad.clientSecret",
      "pt": "msg",
      "to": "AZURE_CLIENTSECRET",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1740,
  "y": 1000,
  "wires": [
    [
      "722caed24769c051"
    ]
  ]
}

module.exports = Node;