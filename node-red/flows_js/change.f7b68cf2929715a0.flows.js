const Node = {
  "id": "f7b68cf2929715a0",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "70f0dd8ceb56e8a4",
  "name": "Request URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "sbsys.url\t& '/api/sag/'\t& sagsId\t& '/delforloeb'",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 520,
  "y": 2040,
  "wires": [
    [
      "2e4cf417b74aaa8c"
    ]
  ]
}

module.exports = Node;