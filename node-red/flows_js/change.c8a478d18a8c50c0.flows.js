const Node = {
  "id": "c8a478d18a8c50c0",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "7927b0d68211546e",
  "name": "Gem\\n mail-krop",
  "rules": [
    {
      "t": "set",
      "p": "mailbody",
      "pt": "msg",
      "to": "html ~> $exists() ? html = \"\" ? payload : html : payload",
      "tot": "jsonata",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 260,
  "y": 320,
  "wires": [
    [
      "d4a9d98f17c1a2c9"
    ]
  ]
}

module.exports = Node;