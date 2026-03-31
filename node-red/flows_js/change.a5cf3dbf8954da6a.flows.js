const Node = {
  "id": "a5cf3dbf8954da6a",
  "type": "change",
  "z": "ed8da944366aaffa",
  "name": "KC oplysninger",
  "rules": [
    {
      "t": "set",
      "p": "cpr",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "cpr.clientId",
      "pt": "msg",
      "to": "CPR_CLIENTID",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "cpr.clientSecret",
      "pt": "msg",
      "to": "CPR_CLIENTSECRET",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 220,
  "y": 160,
  "wires": [
    [
      "ad884f14c988f15c"
    ]
  ]
}

module.exports = Node;