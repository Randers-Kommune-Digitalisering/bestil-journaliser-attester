const Node = {
  "id": "57c7e32ee5b107c0",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "g": "db929ae7e8b947e6",
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
  "x": 280,
  "y": 360,
  "wires": [
    [
      "2e53d80830b1557d"
    ]
  ]
}

module.exports = Node;