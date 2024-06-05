const Node = {
  "id": "c8baf1516926ca93",
  "type": "switch",
  "z": "dacda834ca49f9f0",
  "name": "Fra SD?",
  "property": "from ~> $lowercase()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "eq",
      "v": "MAIL_SD",
      "vt": "env"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 200,
  "y": 80,
  "wires": [
    [],
    []
  ]
}

module.exports = Node;