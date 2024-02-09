const Node = {
  "id": "d4ec8317edf97fb9",
  "type": "change",
  "z": "90c6b0b502e346fa",
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
  "x": 180,
  "y": 1480,
  "wires": [
    [
      "ad3c0a4bdf6840b1"
    ]
  ]
}

module.exports = Node;