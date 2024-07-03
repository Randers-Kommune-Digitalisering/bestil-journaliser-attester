const Node = {
  "id": "5b03a5ab2ef7fdaa",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "ef51f47c59ef9c19",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{    \"authorization\": \"Basic \" & auth,    \"content-type\": \"text/xml; charset=utf-8\",    \"soapaction\": \"GetPersonOperation\"}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 840,
  "y": 1040,
  "wires": [
    [
      "4be4923f45545097"
    ]
  ]
}

module.exports = Node;