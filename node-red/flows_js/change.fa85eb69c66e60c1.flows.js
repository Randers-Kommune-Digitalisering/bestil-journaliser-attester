const Node = {
  "id": "fa85eb69c66e60c1",
  "type": "change",
  "z": "c715449c21b1a61f",
  "name": "Header / Body",
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
  "x": 460,
  "y": 740,
  "wires": [
    [
      "e7c624f58c7d8b14"
    ]
  ],
  "_order": 85
}

module.exports = Node;