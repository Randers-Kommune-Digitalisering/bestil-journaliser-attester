const Node = {
  "id": "a11c8398f3a1595c",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "set msg.type \\n & date \\n & whereClause",
  "rules": [
    {
      "t": "set",
      "p": "type",
      "pt": "msg",
      "to": "req.params.type",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "date",
      "pt": "msg",
      "to": "$now()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "ids",
      "pt": "msg",
      "to": "req.params.ids",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "whereClause",
      "pt": "msg",
      "to": "\"WHERE (\" &\t(\t    ( ids ~> $split(\",\") ) @ $id .\t    [\t        \"uid = \" & $id\t    ]\t    ~> $join(\" OR \")\t)\t& \")\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 1420,
  "wires": [
    [
      "08b29e20d21cff10"
    ]
  ]
}

module.exports = Node;