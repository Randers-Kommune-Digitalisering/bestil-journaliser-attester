const Node = {
  "id": "552c6769a167e905",
  "type": "change",
  "z": "ed8da944366aaffa",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "KEYCLOAK_TOKEN_URL",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 160,
  "wires": [
    [
      "ffc32f8c6a261b64"
    ]
  ]
}

module.exports = Node;