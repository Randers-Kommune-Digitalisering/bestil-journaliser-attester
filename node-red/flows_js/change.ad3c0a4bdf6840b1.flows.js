const Node = {
  "id": "ad3c0a4bdf6840b1",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
  "name": "Request body: \\n Search parameters",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"PrimaerPerson\": {\t        \"CprNummer\": rekvisitus\t    },\t    \"SagsTyper\": [\t        {\t            \"Navn\": \"PersonaleSag\"\t        }\t    ]\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "sbsys",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "sbsys.url",
      "pt": "msg",
      "to": "SBSYS_URL",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "sbsys.url & \"/api/sag/search\"",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 510,
  "y": 1740,
  "wires": [
    [
      "97014fb5606be30b"
    ]
  ]
}

module.exports = Node;