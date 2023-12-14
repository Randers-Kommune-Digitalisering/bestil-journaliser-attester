const Node = {
  "id": "d07b12b1b6cca287",
  "type": "change",
  "z": "c715449c21b1a61f",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "\"https://graph.microsoft.com/v1.0/users\" &\t\"('\" & dqUser &\"')\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 1000,
  "wires": [
    [
      "ebf6d264b651d3e0"
    ]
  ],
  "_order": 95
}

module.exports = Node;