const Node = {
  "id": "b6fa57ad2a26bb4e",
  "type": "change",
  "z": "797d31130fc2a555",
  "name": "Flyt PDF til payload",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "temp",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "attachments[0].content",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "originalFilename",
      "pt": "msg",
      "to": "attachments[0].fileName",
      "tot": "msg"
    },
    {
      "t": "delete",
      "p": "attachments",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 230,
  "y": 120,
  "wires": [
    [
      "59e14b9f69d2fec6"
    ]
  ]
}

module.exports = Node;