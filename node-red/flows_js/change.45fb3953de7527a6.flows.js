const Node = {
  "id": "45fb3953de7527a6",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "2eb13e282655de1e",
  "name": "Attesttype clause",
  "rules": [
    {
      "t": "set",
      "p": "attestTypeClause",
      "pt": "msg",
      "to": "attestType = \"Straffeattest\" ?\t    \"AND erStraffeattest = 1\"\t:\tattestType = \"Borneattest\" ?\t    \"AND erBorneattest = 1\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 270,
  "y": 900,
  "wires": [
    [
      "dfa3fc0ef74e839e"
    ]
  ]
}

module.exports = Node;