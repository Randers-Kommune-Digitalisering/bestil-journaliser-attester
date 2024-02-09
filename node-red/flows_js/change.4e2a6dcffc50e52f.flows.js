const Node = {
  "id": "4e2a6dcffc50e52f",
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
  "y": 1840,
  "wires": [
    [
      "f7b68cf2929715a0"
    ]
  ]
}

module.exports = Node;