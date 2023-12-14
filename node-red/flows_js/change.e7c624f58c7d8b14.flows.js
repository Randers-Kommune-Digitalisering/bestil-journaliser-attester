const Node = {
  "id": "e7c624f58c7d8b14",
  "type": "change",
  "z": "c715449c21b1a61f",
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
  "x": 610,
  "y": 740,
  "wires": [
    [
      "fba37667a3c2d9bf"
    ]
  ],
  "_order": 82
}

module.exports = Node;