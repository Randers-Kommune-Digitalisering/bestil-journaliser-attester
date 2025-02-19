const Node = {
  "id": "74f27060fad25c11",
  "type": "change",
  "z": "c715449c21b1a61f",
  "name": "Klargør advisering",
  "rules": [
    {
      "t": "set",
      "p": "rekvirent",
      "pt": "msg",
      "to": "bestilling.rekvirentEmail",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "rekvirentDQ",
      "pt": "msg",
      "to": "bestilling.rekvirentDQ",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1040,
  "y": 1660,
  "wires": [
    [
      "10550954012e3845"
    ]
  ]
}

module.exports = Node;