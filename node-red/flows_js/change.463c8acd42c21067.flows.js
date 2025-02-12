const Node = {
  "id": "463c8acd42c21067",
  "type": "change",
  "z": "da7be20cd0c704b6",
  "g": "db929ae7e8b947e6",
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
  "x": 470,
  "y": 500,
  "wires": [
    [
      "ed5a51598031160f",
      "305fa96ea5781216"
    ]
  ]
}

module.exports = Node;