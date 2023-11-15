const Node = {
  "id": "d4ec8317edf97fb9",
  "type": "change",
  "z": "971a7ae6df987a48",
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
  "x": 260,
  "y": 900,
  "wires": [
    [
      "f67416d6fdb772ca"
    ]
  ],
  "_order": 31
}

module.exports = Node;