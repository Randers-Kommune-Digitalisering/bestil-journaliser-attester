const Node = {
  "id": "b898d590d1255b7a",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "name": "Sæt msg.values \\n & msg.tablename",
  "rules": [
    {
      "t": "set",
      "p": "values",
      "pt": "msg",
      "to": "payload @ $item .\t( \"(\" &\t\t\"'\" & $item.col1 & \"', '\" & $item.col5 & \"'\"\t\t& \")\" ) ~> $join(\", \")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "roller",
      "tot": "str"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 710,
  "y": 240,
  "wires": [
    [
      "a056e4c75824cd9d"
    ]
  ]
}

module.exports = Node;