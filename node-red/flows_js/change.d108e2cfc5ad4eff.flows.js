const Node = {
  "id": "d108e2cfc5ad4eff",
  "type": "change",
  "z": "812b69015d6703b6",
  "g": "cf5fc001c060884c",
  "name": "Retry config",
  "rules": [
    {
      "t": "set",
      "p": "config",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "config.retryAttempts",
      "pt": "msg",
      "to": "4",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "config.schedule_name",
      "pt": "msg",
      "to": "smtp",
      "tot": "str"
    },
    {
      "t": "delete",
      "p": "error",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 430,
  "y": 100,
  "wires": [
    [
      "b2d8635ce9c88da3"
    ]
  ]
}

module.exports = Node;