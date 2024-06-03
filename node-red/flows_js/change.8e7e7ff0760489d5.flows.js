const Node = {
  "id": "8e7e7ff0760489d5",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "9ce5fb0b8f4eecf5",
  "name": "Set metric api_call",
  "rules": [
    {
      "t": "set",
      "p": "target",
      "pt": "msg",
      "to": "https://login.microsoftonline.com/",
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
  "y": 680,
  "wires": [
    [
      "8e91f4dbedc334b6"
    ]
  ]
}

module.exports = Node;