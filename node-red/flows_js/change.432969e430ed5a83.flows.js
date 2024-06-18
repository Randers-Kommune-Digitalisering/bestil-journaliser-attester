const Node = {
  "id": "432969e430ed5a83",
  "type": "change",
  "z": "43d6b9b519cc6615",
  "g": "451bfd75a97b1db5",
  "name": "Set metric job_started",
  "rules": [
    {
      "t": "set",
      "p": "job_name",
      "pt": "msg",
      "to": "sd_download",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "job_started",
      "pt": "flow",
      "to": "",
      "tot": "date"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 360,
  "y": 120,
  "wires": [
    [
      "509c897e0a2d5173"
    ]
  ]
}

module.exports = Node;