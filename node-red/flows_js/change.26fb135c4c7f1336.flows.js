const Node = {
  "id": "26fb135c4c7f1336",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "2d0458ee6b467f9b",
  "name": "Opsæt globale værdier",
  "rules": [
    {
      "t": "set",
      "p": "sbsip",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "sbsip.user",
      "pt": "msg",
      "to": "SBSIP_USER",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "sbsip.pass",
      "pt": "msg",
      "to": "SBSIP_PASS",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "sbsip.client",
      "pt": "msg",
      "to": "SBSIP_CLIENT",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "sbsip.secret",
      "pt": "msg",
      "to": "SBSIP_SECRET",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "sbsip.url",
      "pt": "msg",
      "to": "SBSIP_URL",
      "tot": "env",
      "dc": true
    },
    {
      "t": "set",
      "p": "sbsip.granttype",
      "pt": "msg",
      "to": "SBSIP_GRANTTYPE",
      "tot": "env",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 1080,
  "wires": [
    [
      "320fbf9e34e778b9"
    ]
  ]
}

module.exports = Node;