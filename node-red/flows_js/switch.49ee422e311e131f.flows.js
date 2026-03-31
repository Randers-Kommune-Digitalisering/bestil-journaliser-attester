const Node = {
  "id": "49ee422e311e131f",
  "type": "switch",
  "z": "ed8da944366aaffa",
  "name": "",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "istype",
      "v": "json",
      "vt": "json"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 770,
  "y": 300,
  "wires": [
    [
      "43d6c46c089e2550"
    ],
    [
      "64be874b02585045"
    ]
  ]
}

module.exports = Node;