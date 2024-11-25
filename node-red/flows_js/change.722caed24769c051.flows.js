const Node = {
  "id": "722caed24769c051",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
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
      "to": "{\t    \"grant_type\": \"client_credentials\",\t    \"scope\": \"https://graph.microsoft.com/.default\",\t    \"client_id\": ad.clientId,\t    \"client_secret\": ad.clientSecret\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1960,
  "y": 1000,
  "wires": [
    [
      "6dd63d804bfab9e6"
    ]
  ]
}

module.exports = Node;