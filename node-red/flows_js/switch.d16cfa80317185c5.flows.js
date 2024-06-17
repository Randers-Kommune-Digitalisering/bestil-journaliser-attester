const Node = {
  "id": "d16cfa80317185c5",
  "type": "switch",
  "z": "812b69015d6703b6",
  "g": "cf5fc001c060884c",
  "name": "dev env?",
  "property": "DEV_ENV",
  "propertyType": "env",
  "rules": [
    {
      "t": "neq",
      "v": "true",
      "vt": "str"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 540,
  "y": 100,
  "wires": [
    [
      "074b5c36544f29c4",
      "b2d8635ce9c88da3"
    ]
  ]
}

module.exports = Node;