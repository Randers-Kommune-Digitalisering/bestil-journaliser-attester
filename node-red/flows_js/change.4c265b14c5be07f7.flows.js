const Node = {
  "id": "4c265b14c5be07f7",
  "type": "change",
  "z": "ed8da944366aaffa",
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
  "x": 260,
  "y": 300,
  "wires": [
    [
      "957aae7e356f46a6"
    ]
  ]
}

module.exports = Node;