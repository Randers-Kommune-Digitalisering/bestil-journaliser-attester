const Node = {
  "id": "8bf6e1c505995071",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"accept\": \"application/json\",\t    \"authorization\": \"Bearer \" & token.access_token,\t    \"content-type\": \"multipart/form-data\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 1360,
  "wires": [
    [
      "f54aa68868e55cb2"
    ]
  ],
  "_order": 36
}

module.exports = Node;