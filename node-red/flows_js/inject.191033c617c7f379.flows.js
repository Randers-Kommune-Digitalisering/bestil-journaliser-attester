const Node = {
  "id": "191033c617c7f379",
  "type": "inject",
  "z": "da7be20cd0c704b6",
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
  "repeat": "21600",
  "crontab": "",
  "once": true,
  "onceDelay": "120",
  "topic": "",
  "x": 110,
  "y": 120,
  "wires": [
    [
      "a06b5c5d0cbbd533"
    ]
  ]
}

module.exports = Node;