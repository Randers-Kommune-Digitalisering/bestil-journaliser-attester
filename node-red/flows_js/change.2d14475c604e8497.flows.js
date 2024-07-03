const Node = {
  "id": "2d14475c604e8497",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "826ac4afb5a7dcfc",
  "name": "Klargør afvisning",
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
  "x": 550,
  "y": 1400,
  "wires": [
    [
      "d4755d4f704973f4"
    ]
  ]
}

module.exports = Node;