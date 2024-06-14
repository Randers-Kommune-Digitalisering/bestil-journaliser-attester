const Node = {
  "id": "fd47afcad6e98bb9",
  "type": "change",
  "z": "d35ec07551c9897c",
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
      "6083ac1b571e526a"
    ]
  ]
}

module.exports = Node;