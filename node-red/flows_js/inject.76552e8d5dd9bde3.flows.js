const Node = {
  "id": "76552e8d5dd9bde3",
  "type": "inject",
  "z": "3f3959fd24bb612e",
  "name": "",
  "props": [
    {
      "p": "days",
      "v": "19",
      "vt": "num"
    },
    {
      "p": "time",
      "v": "($millis() - (days * 86400000)) ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\")",
      "vt": "jsonata"
    }
  ],
  "repeat": "",
  "crontab": "00 03 * * *",
  "once": true,
  "onceDelay": "30",
  "topic": "",
  "x": 130,
  "y": 180,
  "wires": [
    [
      "4bf3be90c1f7f3d0"
    ]
  ]
}

module.exports = Node;