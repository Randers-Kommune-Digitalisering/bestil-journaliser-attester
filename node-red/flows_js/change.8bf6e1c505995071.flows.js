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
  "x": 280,
  "y": 1120,
  "wires": [
    [
      "594e820fabb49d4e"
    ]
  ],
  "_order": 39
}

module.exports = Node;