const Node = {
  "id": "2a7a4d16396a492b",
  "type": "change",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
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
  "x": 600,
  "y": 680,
  "wires": [
    [
      "919ce08d79b0a409"
    ]
  ]
}

module.exports = Node;