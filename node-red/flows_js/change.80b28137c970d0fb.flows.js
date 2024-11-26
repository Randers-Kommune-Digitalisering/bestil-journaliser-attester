const Node = {
  "id": "80b28137c970d0fb",
  "type": "change",
  "z": "3f3959fd24bb612e",
  "name": "Sæt rekvisition + rekvirent",
  "rules": [
    {
      "t": "set",
      "p": "rekvisition",
      "pt": "msg",
      "to": "data[uid = $$.payload]",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "data",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    },
    {
      "t": "set",
      "p": "rekvirent",
      "pt": "msg",
      "to": "rekvisition.rekvirentEmail",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "rekvisition.cpr",
      "pt": "msg",
      "to": "rekvisition.cpr ~> $substring(0, 6)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 670,
  "y": 480,
  "wires": [
    [
      "fd92ef0c7c9c9653"
    ]
  ]
}

module.exports = Node;