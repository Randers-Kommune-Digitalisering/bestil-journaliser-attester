const Node = {
  "id": "ad884f14c988f15c",
  "type": "change",
  "z": "ed8da944366aaffa",
  "name": "Headers / Body",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"Content-Type\": \"application/x-www-form-urlencoded\"\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"grant_type\": \"client_credentials\",\t    \"client_id\": cpr.clientId,\t    \"client_secret\": cpr.clientSecret\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 160,
  "wires": [
    [
      "552c6769a167e905"
    ]
  ]
}

module.exports = Node;