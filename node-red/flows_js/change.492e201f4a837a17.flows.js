const Node = {
  "id": "492e201f4a837a17",
  "type": "change",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
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
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 360,
  "wires": [
    [
      "90b32f94afdf1f05"
    ]
  ]
}

module.exports = Node;