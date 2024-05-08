const Node = {
  "id": "a11c8398f3a1595c",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "set SQL",
  "rules": [
    {
      "t": "set",
      "p": "ids",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "whereClause",
      "pt": "msg",
      "to": "\"(\" &\t(\t    ids @ $id .\t    (\t        [\t            \"uid = \" & $id\t        ]\t    ) ~> $join(\" OR \")\t)\t& \")\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 1120,
  "wires": [
    [
      "08b29e20d21cff10"
    ]
  ]
}

module.exports = Node;