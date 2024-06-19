const Node = {
  "id": "d07b12b1b6cca287",
  "type": "change",
  "z": "c715449c21b1a61f",
  "g": "3c5129bfe50adfad",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "\"https://graph.microsoft.com/v1.0/users/?$filter=onPremisesSamAccountName eq '\"\t& dqUser & \"'&$count=true&$select=mail\"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 590,
  "y": 820,
  "wires": [
    [
      "ebf6d264b651d3e0",
      "3266c68369504fbe"
    ]
  ]
}

module.exports = Node;