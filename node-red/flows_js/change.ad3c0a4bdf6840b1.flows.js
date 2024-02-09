const Node = {
  "id": "ad3c0a4bdf6840b1",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "name": "Request body: \\n Search parameters",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"PrimaerPerson\": {\t        \"CprNummer\": medarbejder\t    },\t    \"SagsTyper\": [\t        {\t            \"Navn\": \"PersonaleSag\"\t        }\t    ]\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 1480,
  "wires": [
    [
      "97014fb5606be30b"
    ]
  ]
}

module.exports = Node;