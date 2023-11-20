const Node = {
  "id": "ad3c0a4bdf6840b1",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Request body: \\n Search paramteres",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"PrimaerPerson\": {\t        \"CprNummer\": medarbejder\t    }\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 510,
  "y": 920,
  "wires": [
    [
      "97014fb5606be30b"
    ]
  ],
  "_order": 34
}

module.exports = Node;