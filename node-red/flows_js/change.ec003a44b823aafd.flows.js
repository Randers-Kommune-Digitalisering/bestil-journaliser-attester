const Node = {
  "id": "ec003a44b823aafd",
  "type": "change",
  "z": "bb3c27172f633c4a",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "rekvisitus",
      "pt": "msg",
      "to": "{\t   \"cpr\": rekvisitus ~> $exists() ? rekvisitus.cpr : null,\t   \"navn\": null\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 970,
  "y": 240,
  "wires": [
    []
  ]
}

module.exports = Node;