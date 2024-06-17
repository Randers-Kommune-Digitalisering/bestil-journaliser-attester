const Node = {
  "id": "19de3b06f962d74f",
  "type": "change",
  "z": "3f367bd6f801e4ba",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "email",
      "pt": "msg",
      "to": "{\t    \"to\": to,\t    \"from\": from,\t    \"subject\": topic\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 520,
  "y": 60,
  "wires": [
    [
      "636a462ff453747d"
    ]
  ]
}

module.exports = Node;