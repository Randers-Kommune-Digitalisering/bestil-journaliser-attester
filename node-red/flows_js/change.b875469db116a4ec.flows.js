const Node = {
  "id": "b875469db116a4ec",
  "type": "change",
  "z": "d8101c60e986806b",
  "g": "9a4f435ac5f5f6fa",
  "name": "Set stdout",
  "rules": [
    {
      "t": "set",
      "p": "stdout",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "stdout.timestamp",
      "pt": "msg",
      "to": "",
      "tot": "date"
    },
    {
      "t": "set",
      "p": "stdout.action",
      "pt": "msg",
      "to": "sql",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "stdout.affectedRows",
      "pt": "msg",
      "to": "payload.affectedRows ? payload.affectedRows : 0",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.succes",
      "pt": "msg",
      "to": "error ~> $exists() ? false : true",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "stdout.error",
      "pt": "msg",
      "to": "error ~> $exists() ? error.message",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 580,
  "wires": [
    [
      "e4750c733d036c3f"
    ]
  ]
}

module.exports = Node;