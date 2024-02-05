const Node = {
  "id": "ed9fad996fd73d58",
  "type": "change",
  "z": "9eb7a9e92cdd8fea",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "isClean",
      "pt": "msg",
      "to": "true\tin\tpayload.t @ $text . (\t    $text ~> $contains(\"er ikke registreret med afgørelser\")\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 820,
  "y": 320,
  "wires": [
    [
      "1ba88a6ca069ea44"
    ]
  ]
}

module.exports = Node;