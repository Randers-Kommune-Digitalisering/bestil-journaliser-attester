const Node = {
  "id": "6d4a14f7c2422261",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Request body",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"username\": sbsip.user,\t    \"password\": sbsip.pass,\t    \"grant_type\": \"password\",\t    \"client_id\": sbsip.client,\t    \"client_secret\": sbsip.secret\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 740,
  "y": 720,
  "wires": [
    [
      "7ee3ca33239a3c60"
    ]
  ],
  "_order": 27
}

module.exports = Node;