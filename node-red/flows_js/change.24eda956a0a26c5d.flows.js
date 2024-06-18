const Node = {
  "id": "24eda956a0a26c5d",
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