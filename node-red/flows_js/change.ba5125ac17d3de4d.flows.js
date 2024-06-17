const Node = {
  "id": "ba5125ac17d3de4d",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "name": "Sæt msg.values \\n & msg.tablename",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> | $ |\t{\t    \"dq\": col1 ~> $replace(\"\\u0000\", \"\") ~> $uppercase(),\t    \"rolle\": col5 ~> $replace(\"\\u0000\", \"\") ~> $lowercase()\t},\t[\"col1\", \"col2\", \"col3\", \"col4\", \"col5\", \"col6\", \"col7\", \"col8\"] |",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(payload.dq ~> $distinct()) @ $dq . \t{\t    \"dq\": $dq,\t    \"rolle\": ($.payload[dq = $dq].rolle)[0]\t}",
      "tot": "jsonata"
    },
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