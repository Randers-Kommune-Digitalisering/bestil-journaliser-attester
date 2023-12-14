const Node = {
  "id": "b985bd8c1549809a",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "9e73796625eb7a3f",
  "name": "CPR OK?",
  "property": "(\t    $cprMatch := /((((0[1-9]|[12][0-9]|3[01])(0[13578]|10|12)(\\d{2}))|(([0][1-9]|[12][0-9]|30)(0[469]|11)(\\d{2}))|((0[1-9]|1[0-9]|2[0-8])(02)(\\d{2}))|((29)(02)(00))|((29)(02)([2468][048]))|((29)(02)([13579][26])))[-]*\\d{4})/i;\t    $cprMatch(medarbejder);\t)\t~> $exists()",
  "propertyType": "jsonata",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 520,
  "y": 560,
  "wires": [
    [
      "f0141e1b42899ebb"
    ],
    [
      "461970279c8fa295"
    ]
  ],
  "_order": 154
}

module.exports = Node;