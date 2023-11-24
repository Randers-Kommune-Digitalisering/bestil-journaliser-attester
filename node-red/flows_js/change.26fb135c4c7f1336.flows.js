const Node = {
  "id": "26fb135c4c7f1336",
  "type": "change",
  "z": "971a7ae6df987a48",
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
  "x": 480,
  "y": 560,
  "wires": [
    [
      "320fbf9e34e778b9"
    ]
  ],
  "_order": 27
}

module.exports = Node;