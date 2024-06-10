const Node = {
  "id": "96d9b649bfd8a429",
  "type": "change",
  "z": "9f905819f05b7a1a",
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
  "x": 870,
  "y": 180,
  "wires": [
    [
      "f598f37b63f7edc4"
    ]
  ]
}

module.exports = Node;