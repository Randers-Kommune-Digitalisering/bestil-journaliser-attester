const Node = {
  "id": "20fe6c8ef45ad2ff",
  "type": "change",
  "z": "7459f772194dcf44",
  "g": "a3f24782e0a49572",
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
  "x": 460,
  "y": 220,
  "wires": [
    [
      "42f951554af59bd7"
    ]
  ],
  "_order": 51
}

module.exports = Node;