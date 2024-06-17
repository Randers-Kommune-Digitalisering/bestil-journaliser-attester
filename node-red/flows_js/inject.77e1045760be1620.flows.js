const Node = {
  "id": "77e1045760be1620",
  "type": "inject",
  "z": "3f367bd6f801e4ba",
  "name": "",
  "props": [
    {
      "p": "to",
      "v": "st@randers.dk",
      "vt": "str"
    },
    {
      "p": "topic",
      "vt": "str"
    },
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": true,
  "onceDelay": "5",
  "topic": "Test-overskrift",
  "payload": "Dette er en test mail",
  "payloadType": "str",
  "x": 140,
  "y": 60,
  "wires": [
    [
      "b94c0a096875dfab"
    ]
  ]
}

module.exports = Node;