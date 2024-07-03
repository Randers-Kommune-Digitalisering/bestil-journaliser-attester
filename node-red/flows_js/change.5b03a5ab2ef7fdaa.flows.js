const Node = {
  "id": "5b03a5ab2ef7fdaa",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "cd103be25bfed5cd",
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
      "4be4923f45545097",
      "e613c6a519b5d768"
    ]
  ]
}

module.exports = Node;