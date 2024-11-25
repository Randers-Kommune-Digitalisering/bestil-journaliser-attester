const Node = {
  "id": "6dd63d804bfab9e6",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
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
  "x": 2130,
  "y": 1000,
  "wires": [
    [
      "643ce3a444679564"
    ]
  ]
}

module.exports = Node;