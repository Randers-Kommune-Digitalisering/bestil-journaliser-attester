const Node = {
  "id": "8ef59cc3770c0d4c",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "SQL",
  "rules": [
    {
      "t": "set",
      "p": "attestTypeClause",
      "pt": "msg",
      "to": "attestType != -1 ?\t    attestType ~> $type() = \"array\" ?\t        (\t            \"AND (\" & ( attestType @ $type . (\"attestType = \" & $type) ~> $join(\" OR \") ) & \")\"\t        )\t    :   \"AND attestType = \" & attestType",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "bestillinger",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 920,
  "wires": [
    [
      "50ef0cb1a829a484"
    ]
  ]
}

module.exports = Node;