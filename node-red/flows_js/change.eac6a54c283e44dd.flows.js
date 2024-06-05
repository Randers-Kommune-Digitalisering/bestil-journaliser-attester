const Node = {
  "id": "eac6a54c283e44dd",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "7ea60c70ea627079",
  "name": "Set metric api_call",
  "rules": [
    {
      "t": "set",
      "p": "target",
      "pt": "msg",
      "to": "https://graph.microsoft.com/v1.0/users/",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "status_code",
      "pt": "msg",
      "to": "statusCode",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1290,
  "y": 820,
  "wires": [
    [
      "f5221a37dc7122b7"
    ]
  ]
}

module.exports = Node;