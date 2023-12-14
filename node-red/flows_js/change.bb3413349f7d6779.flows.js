const Node = {
  "id": "bb3413349f7d6779",
  "type": "change",
  "z": "c715449c21b1a61f",
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
  "y": 740,
  "wires": [
    [
      "fa85eb69c66e60c1"
    ]
  ],
  "_order": 81
}

module.exports = Node;