const Node = {
  "id": "0ca10e0ebd731f53",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "3c5129bfe50adfad",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"accept\": \"application/json\",\t    \"authorization\": \"Bearer \" & payload.access_token,\t    \"content-type\": \"application/json\",\t    \"ConsistencyLevel\": \"eventual\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 820,
  "wires": [
    [
      "d07b12b1b6cca287"
    ]
  ]
}

module.exports = Node;