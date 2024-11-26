const Node = {
  "id": "f0cfcad0822cce88",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "g": "db929ae7e8b947e6",
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
  "x": 460,
  "y": 280,
  "wires": [
    [
      "860c5da1a1a0c2ce"
    ]
  ]
}

module.exports = Node;