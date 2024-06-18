const Node = {
  "id": "d5d502b05f5c5362",
  "type": "change",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"accept\": \"application/json\",\t    \"authorization\": \"Bearer \" & token.access_token,\t    \"content-type\": \"application/json\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 360,
  "y": 680,
  "wires": [
    [
      "2a7a4d16396a492b"
    ]
  ]
}

module.exports = Node;