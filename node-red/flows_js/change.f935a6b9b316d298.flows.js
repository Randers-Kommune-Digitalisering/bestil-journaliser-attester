const Node = {
  "id": "f935a6b9b316d298",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "name": "Sæt msg.values \\n & msg.tablename",
  "rules": [
    {
      "t": "set",
      "p": "values",
      "pt": "msg",
      "to": "payload @ $item .\t( \"(\" &\t\t\"'\" & $item.'Lokalt brugernavn' & \"', '\" & $item.Rolle & \"'\"\t\t& \")\" ) ~> $join(\", \")",
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
  "x": 530,
  "y": 240,
  "wires": [
    [
      "a056e4c75824cd9d"
    ]
  ]
}

module.exports = Node;