const Node = {
  "id": "79cb1cda6a4d53dd",
  "type": "change",
  "z": "90c6b0b502e346fa",
  "g": "8ed53d646c31a084",
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
  "x": 2130,
  "y": 1140,
  "wires": [
    [
      "2d162f80bda7a03b",
      "a8f8a19ce669ef42"
    ]
  ]
}

module.exports = Node;