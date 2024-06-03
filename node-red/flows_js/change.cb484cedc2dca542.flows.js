const Node = {
  "id": "cb484cedc2dca542",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "f58662076006e952",
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
  "x": 190,
  "y": 2520,
  "wires": [
    [
      "614fe7bbe8445a6c"
    ]
  ]
}

module.exports = Node;