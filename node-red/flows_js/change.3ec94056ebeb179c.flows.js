const Node = {
  "id": "3ec94056ebeb179c",
  "type": "change",
  "z": "c715449c21b1a61f",
  "name": "URL",
  "rules": [
    {
      "t": "set",
      "p": "url",
      "pt": "msg",
      "to": "\"https://graph.microsoft.com/v1.0/users?$select=onPremisesSamAccountName\"/* &\t\"('\" & dqUser &\"')\"*/",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 550,
  "y": 1080,
  "wires": [
    []
  ],
  "_order": 99
}

module.exports = Node;