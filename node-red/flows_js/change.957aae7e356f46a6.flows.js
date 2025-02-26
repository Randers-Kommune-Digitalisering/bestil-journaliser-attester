const Node = {
  "id": "957aae7e356f46a6",
  "type": "change",
  "z": "ed8da944366aaffa",
  "name": "CPR request",
  "rules": [
    {
      "t": "set",
      "p": "base_url",
      "pt": "msg",
      "to": "CPR_SERVICE_URL",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "base_url & \"PersonBaseDataExtendedService/lookup/name/\" & rekvisitus.cpr",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 300,
  "wires": [
    [
      "419d3906a4038e3c"
    ]
  ]
}

module.exports = Node;