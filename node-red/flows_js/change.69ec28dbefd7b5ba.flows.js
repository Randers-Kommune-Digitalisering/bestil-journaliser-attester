const Node = {
  "id": "69ec28dbefd7b5ba",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "Set rekvisitionsdata",
  "rules": [
    {
      "t": "set",
      "p": "rekvirent",
      "pt": "msg",
      "to": "payload[0].rekvirentEmail",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "attestType",
      "pt": "msg",
      "to": "payload[0].attestType = 0 ?\t    \"offentlig straffeattest\"\t:\tpayload[0].attestType = 1 ?\t    \"privat straffeattest\"\t:\tpayload[0].attestType = 2 ?\t    \"børneattest\"",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "rekvisition",
      "pt": "msg",
      "to": "{ \"uid\": $$.uid }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1110,
  "y": 900,
  "wires": [
    [
      "0a543725b05530a5"
    ]
  ]
}

module.exports = Node;