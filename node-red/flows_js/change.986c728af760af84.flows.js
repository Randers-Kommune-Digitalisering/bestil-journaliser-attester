const Node = {
  "id": "986c728af760af84",
  "type": "change",
  "z": "812b69015d6703b6",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "rekvisition.rekvirentDQ",
      "pt": "msg",
      "to": "rekvisition.rekvirentDQ ~> $exists() ? rekvisition.rekvirentDQ : payload[0].rekvirentDQ",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1670,
  "y": 340,
  "wires": [
    [
      "1ec4bb1ffb9c38d1"
    ]
  ]
}

module.exports = Node;