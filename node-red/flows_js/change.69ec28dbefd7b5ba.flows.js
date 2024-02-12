const Node = {
  "id": "69ec28dbefd7b5ba",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "sagsbehandler",
      "pt": "msg",
      "to": "payload[0].sagsbehandlerEmail",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1130,
  "y": 1200,
  "wires": [
    [
      "0a543725b05530a5"
    ]
  ]
}

module.exports = Node;