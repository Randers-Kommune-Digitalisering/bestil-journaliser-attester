const Node = {
  "id": "8bf6e1c505995071",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "d774a29ec2b63a5e",
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
  "x": 180,
  "y": 2440,
  "wires": [
    [
      "f54aa68868e55cb2"
    ]
  ]
}

module.exports = Node;