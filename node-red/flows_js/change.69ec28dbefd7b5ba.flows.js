const Node = {
  "id": "69ec28dbefd7b5ba",
  "type": "change",
  "z": "7d7cd8fb8a9dbe4e",
  "name": "",
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
      "to": "payload[0].erStraffeattest = 1 ?\t    \"straffeattest\"\t:\tpayload[0].erBorneattest = 1 ?\t    \"børneattest\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1120,
  "y": 1060,
  "wires": [
    [
      "0a543725b05530a5"
    ]
  ]
}

module.exports = Node;