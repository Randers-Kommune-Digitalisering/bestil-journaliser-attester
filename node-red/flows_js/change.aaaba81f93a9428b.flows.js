const Node = {
  "id": "aaaba81f93a9428b",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "bab02435ebea55f1",
  "name": "Sæt rekvirent",
  "rules": [
    {
      "t": "set",
      "p": "rekvirentNavn",
      "pt": "msg",
      "to": "DEMO_NAME",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "rekvirent",
      "pt": "msg",
      "to": "DEMO_MAIL",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 490,
  "y": 1060,
  "wires": [
    [
      "8999dd7c37c527b7"
    ]
  ]
}

module.exports = Node;