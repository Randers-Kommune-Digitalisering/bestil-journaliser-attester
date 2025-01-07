const Node = {
  "id": "fe7895bb7baff7c0",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "3c5129bfe50adfad",
  "name": "Retrieve token",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "azure_token",
      "tot": "global",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 380,
  "y": 600,
  "wires": [
    [
      "cd2dda60b65708a6"
    ]
  ]
}

module.exports = Node;