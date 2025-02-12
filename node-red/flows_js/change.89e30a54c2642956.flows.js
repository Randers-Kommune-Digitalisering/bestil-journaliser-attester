const Node = {
  "id": "89e30a54c2642956",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "g": "db929ae7e8b947e6",
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
  "x": 320,
  "y": 500,
  "wires": [
    [
      "463c8acd42c21067"
    ]
  ]
}

module.exports = Node;