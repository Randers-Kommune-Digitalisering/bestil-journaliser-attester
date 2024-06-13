const Node = {
  "id": "3d92834982842050",
  "type": "inject",
  "z": "c715449c21b1a61f",
  "g": "0477132fb9f28020",
  "name": "Testdata",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "{\"sagsbehandler\":\"Rekvirent Navn - DQA1234\",\"medarbejderCPR\":\"000000-0000\",\"attestType\":\"0, 2\",\"attestSubType\":[{\"attestType\":0,\"subType\":\"1\"},{\"attestType\":2,\"subType\":\"0\"}],\"samtykke\":\"true\"}",
  "payloadType": "json",
  "x": 140,
  "y": 160,
  "wires": [
    [
      "6a1f71dd644f3775",
      "33fb8430fb35f823"
    ]
  ]
}

module.exports = Node;