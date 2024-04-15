const Node = {
  "id": "865424cbe3ef7eb0",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "d774a29ec2b63a5e",
  "name": "Request URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "'https://sbsysapitest.randers.dk/api/dokument/journaliser'\t& ( delforloebId != null ? '/' & delforloebId )",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 820,
  "y": 2420,
  "wires": [
    [
      "f7bcbe671cbfeffd"
    ]
  ]
}

module.exports = Node;