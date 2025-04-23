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
      "p": "attestErRen",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "erAfvist",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "attestTypeString",
      "pt": "msg",
      "to": "rekvisition.attestType = 2 ? 'børneattest' : 'straffeattest'",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "erJournaliseret",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 850,
  "y": 480,
  "wires": [
    [
      "34a10f4966b99eea"
    ]
  ]
}

module.exports = Node;