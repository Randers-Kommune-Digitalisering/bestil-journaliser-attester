const Node = {
  "id": "8845cb06b0eebc7f",
  "type": "change",
  "z": "797d31130fc2a555",
  "d": true,
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
      "to": "attachments[0].filename",
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
  "y": 160,
  "wires": [
    [
      "59e14b9f69d2fec6"
    ]
  ]
}

module.exports = Node;