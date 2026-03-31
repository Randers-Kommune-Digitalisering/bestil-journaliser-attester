const Node = {
  "id": "655fee06a2f86f58",
  "type": "change",
  "z": "bb3c27172f633c4a",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t   \"authorization\": \"Basic \" & auth,\t   \"content-type\": \"text/xml; charset=utf-8\",\t   \"soapaction\": \"GetPersonOperation\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1000,
  "y": 80,
  "wires": [
    [
      "78cc74d2169edfa3"
    ]
  ]
}

module.exports = Node;