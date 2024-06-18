const Node = {
  "id": "7fd7f419f401469c",
  "type": "change",
  "z": "8de8949c7710fbab",
  "g": "b54dd860c113d0d4",
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
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"username\": sbsip.user,\t    \"password\": sbsip.pass,\t    \"grant_type\": sbsip.granttype,\t    \"client_id\": sbsip.client,\t    \"client_secret\": sbsip.secret\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "sbsip.url & \"/auth/realms/sbsip/protocol/openid-connect/token\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 580,
  "y": 160,
  "wires": [
    [
      "c1f016c88baaea7a"
    ]
  ]
}

module.exports = Node;