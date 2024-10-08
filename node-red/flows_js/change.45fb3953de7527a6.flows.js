const Node = {
  "id": "45fb3953de7527a6",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "2eb13e282655de1e",
  "name": "SQL-værdier",
  "rules": [
    {
      "t": "set",
      "p": "erAfvistValue",
      "pt": "msg",
      "to": "erAfvist ? 1 : 0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "afvistAt",
      "pt": "msg",
      "to": "erAfvist? \"afvist = NOW(),\"",
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
  "x": 350,
  "y": 1280,
  "wires": [
    [
      "dfa3fc0ef74e839e"
    ]
  ]
}

module.exports = Node;