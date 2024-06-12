const Node = {
  "id": "f172fc1996370f7a",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "012ee3cd0590380d",
  "name": "Sæt modtager \\n og overskrift",
  "rules": [
    {
      "t": "set",
      "p": "to",
      "pt": "msg",
      "to": "rekvirent",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "topic",
      "pt": "msg",
      "to": "Din bestilling af attest er blevet afvist",
      "tot": "str"
    },
    {
      "t": "delete",
      "p": "from",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1080,
  "y": 880,
  "wires": [
    [
      "02f96f186f7ef115"
    ]
  ]
}

module.exports = Node;