const Node = {
  "id": "fe7895bb7baff7c0",
  "type": "change",
  "z": "c715449c21b1a61f",
  "name": "Retrieve token",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "token",
      "tot": "flow",
      "dc": true
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 560,
  "y": 740,
  "wires": [
    [
      "cd2dda60b65708a6"
    ]
  ],
  "_order": 91
}

module.exports = Node;