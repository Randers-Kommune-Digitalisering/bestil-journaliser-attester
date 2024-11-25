const Node = {
  "id": "1bb4c5a26edc1813",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
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
  "x": 1980,
  "y": 1140,
  "wires": [
    [
      "79cb1cda6a4d53dd"
    ]
  ]
}

module.exports = Node;