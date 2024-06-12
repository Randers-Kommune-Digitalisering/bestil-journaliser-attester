const Node = {
  "id": "341087aba98a8a1e",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "name": "Sæt msg.values \\n & msg.tablename",
  "rules": [
    {
      "t": "set",
      "p": "values",
      "pt": "msg",
      "to": "payload @ $item .\t( \"(\" &\t\t\"'\" & $item.dq & \"', '\" & $item.rolle & \"'\"\t\t& \")\" ) ~> $join(\", \")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "tablename",
      "pt": "msg",
      "to": "roller",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 590,
  "y": 260,
  "wires": [
    [
      "a056e4c75824cd9d"
    ]
  ]
}

module.exports = Node;