const Node = {
  "id": "d4a9d98f17c1a2c9",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "name": "Straffeattest?",
  "property": "topic",
  "propertyType": "msg",
  "rules": [
    {
      "t": "cont",
      "v": "Digitalpost (29189668): Straffeatt.",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 410,
  "y": 180,
  "wires": [
    [
      "56d5b9c13aa749d0"
    ],
    [
      "667a303bf6db80db"
    ]
  ],
  "_order": 22
}

module.exports = Node;