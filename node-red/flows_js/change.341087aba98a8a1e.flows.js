const Node = {
  "id": "341087aba98a8a1e",
  "type": "change",
  "z": "dacda834ca49f9f0",
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
  "x": 1010,
  "y": 80,
  "wires": [
    [
      "35b3745ce40e7de4"
    ]
  ]
}

module.exports = Node;