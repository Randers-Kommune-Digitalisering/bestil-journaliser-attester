const Node = {
  "id": "6b43c5128e1580f4",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "g": "31e203737d08a57a",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "rekvisition",
      "pt": "msg",
      "to": "{ \"cpr\": payload }",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "rekvisitus",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 135,
  "y": 1000,
  "wires": [
    [
      "26a972e064b67dd6"
    ]
  ],
  "l": false
}

module.exports = Node;