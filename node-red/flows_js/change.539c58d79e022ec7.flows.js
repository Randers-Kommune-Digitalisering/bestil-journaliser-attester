const Node = {
  "id": "539c58d79e022ec7",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "g": "db929ae7e8b947e6",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "\"https://login.microsoftonline.com/\" &\tad.tenantId &\t\"/oauth2/v2.0/token\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 670,
  "y": 360,
  "wires": [
    [
      "f6c326d993601a0e"
    ]
  ]
}

module.exports = Node;